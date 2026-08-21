import { buildChatSystemPrompt } from '@/lib/chat-context';

// Model choice — checked https://console.groq.com/docs/models on 2026-08-22:
// openai/gpt-oss-20b is a production model running at ~1000 tok/s (Groq's
// fastest text model, also the cheapest per token), which makes it the best
// fit for low-latency chat on the free tier. Re-check that page before
// swapping models — Groq deprecates them periodically.
const CHAT_MODEL = 'openai/gpt-oss-20b';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// gpt-oss is a reasoning model; "low" effort keeps latency and token use down.
const REASONING_EFFORT = 'low';
// Output cap so a single request can't drain the free-tier daily quota.
const MAX_OUTPUT_TOKENS = 500;
const TEMPERATURE = 0.4;

// Abuse protection limits.
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 8; // messages per IP per minute
const MAX_INCOMING_MESSAGES = 40;
const MAX_HISTORY_MESSAGES = 12;
const MAX_MESSAGE_CHARS = 800;
const MAX_TOTAL_CHARS = 5000;

// NOTE: this in-memory limiter resets on every redeploy/cold start and is
// per-server-instance. For real persistence, move it to Upstash Redis (their
// free tier is enough for a site like this).
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitStore.get(key) ?? []).filter((t) => t > cutoff);

  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  rateLimitStore.set(key, timestamps);
  return false;
}

type ChatMessage = { role: 'user' | 'assistant'; content: string };

function sanitizeMessages(raw: unknown): ChatMessage[] | null {
  if (
    !Array.isArray(raw) ||
    raw.length === 0 ||
    raw.length > MAX_INCOMING_MESSAGES
  ) {
    return null;
  }

  const cleaned: ChatMessage[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') return null;
    const role = (item as Record<string, unknown>).role;
    const content = (item as Record<string, unknown>).content;
    if (
      (role !== 'user' && role !== 'assistant') ||
      typeof content !== 'string' ||
      !content.trim()
    ) {
      return null;
    }
    cleaned.push({ role, content: content.trim().slice(0, MAX_MESSAGE_CHARS) });
  }

  // Send only recent history, capped by total characters sent upstream.
  const limited: ChatMessage[] = [];
  let totalChars = 0;
  for (
    let i = cleaned.length - 1;
    i >= 0 && limited.length < MAX_HISTORY_MESSAGES;
    i--
  ) {
    totalChars += cleaned[i].content.length;
    if (totalChars > MAX_TOTAL_CHARS) break;
    limited.unshift(cleaned[i]);
  }

  return limited.length > 0 ? limited : null;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: 'Missing chat configuration' },
        { status: 500 }
      );
    }

    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      'unknown';

    if (isRateLimited(clientIp)) {
      return Response.json(
        { error: 'Too many messages. Please wait a moment and try again.' },
        { status: 429 }
      );
    }

    const { messages } = await request.json();
    const sanitized = sanitizeMessages(messages);

    if (!sanitized) {
      return Response.json({ error: 'Invalid messages payload' }, { status: 400 });
    }

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        messages: [
          { role: 'system', content: buildChatSystemPrompt() },
          ...sanitized,
        ],
        max_tokens: MAX_OUTPUT_TOKENS,
        temperature: TEMPERATURE,
        reasoning_effort: REASONING_EFFORT,
        stream: true,
      }),
    });

    if (!response.ok || !response.body) {
      const errorData = await response.json().catch(() => null);
      console.error('Chat API error:', response.status, errorData);

      if (response.status === 429) {
        return Response.json(
          {
            error:
              'The assistant is busy right now. Please try again in a minute.',
          },
          { status: 429 }
        );
      }

      if (response.status === 401 || response.status === 403) {
        return Response.json(
          { error: 'Chat configuration error' },
          { status: 500 }
        );
      }

      return Response.json(
        { error: 'Chat service unavailable' },
        { status: 502 }
      );
    }

    // Passthrough stream: unwrap Groq's SSE frames into plain-text chunks so
    // the client only needs fetch + TextDecoder (no SDK dependency).
    const upstream = response.body;
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const reader = upstream.getReader();
        let buffer = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() ?? '';

            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine.startsWith('data:')) continue;

              const payload = trimmedLine.slice(5).trim(); // strip leading "data:"
              if (!payload || payload === '[DONE]') continue;

              try {
                const chunk = JSON.parse(payload);
                // Reasoning tokens arrive on delta.reasoning and are dropped here.
                const delta: unknown = chunk.choices?.[0]?.delta?.content;
                if (typeof delta === 'string' && delta) {
                  controller.enqueue(encoder.encode(delta));
                }
              } catch {
                // Ignore malformed or partial SSE frames.
              }
            }
          }
        } catch (error) {
          console.error('Chat API error:', error);
        } finally {
          try {
            controller.close();
          } catch {
            // Controller may already be closed if the client disconnected.
          }
          reader.releaseLock();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json({ error: 'Failed to get a response' }, { status: 500 });
  }
}

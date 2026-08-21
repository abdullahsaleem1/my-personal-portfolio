import { Resend } from 'resend';

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 3;

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

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

    if (!apiKey) {
      return Response.json(
        { error: 'Missing email configuration' },
        { status: 500 }
      );
    }

    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      'unknown';

    if (isRateLimited(clientIp)) {
      return Response.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { name, email, subject, message, website } = await request.json();

    if (website) {
      return Response.json({ success: true });
    }

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const response = await resend.emails.send({
      from: fromEmail,
      to: 'iamabdullahsaleem1@gmail.com',
      subject: `Portfolio Contact: ${subject} from ${name}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (response.error) {
      return Response.json(
        { error: response.error.message },
        { status: 400 }
      );
    }

    return Response.json({ success: true, id: response.data?.id });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

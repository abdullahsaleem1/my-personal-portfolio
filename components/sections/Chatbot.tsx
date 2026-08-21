'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const WELCOME_MESSAGE =
  "Hi! I'm Abdullah's AI assistant. Ask me anything about Abdullah's background, skills, experience, or projects.";

const SUGGESTED_QUESTIONS = [
  "What are Abdullah's strongest skills?",
  'Walk me through his projects',
  'Is he available for hire?',
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const list = scrollRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setError('');
    setInput('');

    const history: ChatMessage[] = [...messages, { role: 'user', content }];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.error ?? 'Failed to get a response. Please try again.'
        );
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let receivedAny = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        if (!chunk) continue;
        receivedAny = true;

        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = {
            role: 'assistant',
            content: next[next.length - 1].content + chunk,
          };
          return next;
        });
      }

      if (!receivedAny) {
        throw new Error('Received an empty response. Please try again.');
      }
    } catch (err) {
      console.error('Chatbot error:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred. Please try again later.'
      );
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant' && last.content === '') {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 z-50 flex h-[min(70vh,32rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:right-6"
            role="dialog"
            aria-label="Chat with Abdullah's AI assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-clark-gold px-4 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/10">
                <Bot className="h-5 w-5 text-black" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-black">
                  Ask my AI assistant
                </p>
                <p className="truncate text-xs text-black/70">
                  Grounded in my actual portfolio content
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1.5 text-black transition-colors hover:bg-black/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              role="log"
              aria-live="polite"
              className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4"
            >
              <div className="flex justify-start">
                <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-black shadow-sm">
                  {WELCOME_MESSAGE}
                </div>
              </div>

              {messages.map((message, index) => {
                const isTypingPlaceholder =
                  loading &&
                  index === messages.length - 1 &&
                  message.role === 'assistant' &&
                  message.content === '';

                if (isTypingPlaceholder) {
                  return (
                    <div key={index} className="flex justify-start">
                      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-clark-gold-dark [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-clark-gold-dark [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-clark-gold-dark" />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm shadow-sm ${
                        message.role === 'user'
                          ? 'rounded-br-sm bg-clark-gold text-black'
                          : 'rounded-bl-sm bg-white text-black'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Error state — matches the Contact.tsx banner style */}
            {error && (
              <div className="mx-4 mb-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Suggested prompts */}
            {messages.length === 0 && !loading && !error && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition-colors duration-300 hover:border-clark-gold hover:bg-clark-gold hover:text-black"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex items-end gap-2 border-t border-gray-200 bg-white p-3"
            >
              <label htmlFor="chat-input" className="sr-only">
                Message
              </label>
              <input
                ref={inputRef}
                id="chat-input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about my work..."
                maxLength={800}
                autoComplete="off"
                className="form-input-picto flex-1"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clark-gold text-black transition-colors duration-300 hover:bg-clark-gold-dark disabled:opacity-50 disabled:hover:bg-clark-gold"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close chat' : "Chat with Abdullah's AI assistant"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-clark-gold text-black shadow-lg shadow-clark-gold/25 sm:right-6"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </>
  );
}

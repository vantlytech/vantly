'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHATBOT_API = '/api/chat';

const isAssistant = (msg: Message) => msg.role === 'assistant';

function renderMessage(msg: Message) {
  if (!isAssistant(msg)) return msg.content;
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  const parts = msg.content.split(linkRegex);
  return parts.map((part, i) =>
    linkRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all text-blue-600 underline underline-offset-2 hover:text-blue-700"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(CHATBOT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) {
        console.error('Chat API error:', data);
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.detail || 'Sorry, something went wrong. Please try again.' },
        ]);
        return;
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error. Please try again later.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_30px_-4px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-4px_rgba(37,99,235,0.6)]',
          open ? 'bg-[#0b1220]' : 'bg-blue-600'
        )}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[360px] flex-col overflow-hidden rounded-2xl border border-[#e6eaf2] bg-white shadow-[0_20px_60px_-12px_rgba(11,18,32,0.25)] sm:w-[400px]">
          {/* Header */}
          <div className="bg-blue-600 px-5 py-4">
            <p className="text-[0.9375rem] font-semibold text-white">Vantly Assistant</p>
            <p className="text-[0.75rem] text-blue-100">Ask about our services, pricing, or process</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4" style={{ maxHeight: '360px' }}>
            {messages.length === 0 && (
              <p className="text-center text-[0.8125rem] text-[#98a1b3]">
                Hi! How can we help your business grow?
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'mb-3 max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.875rem] leading-relaxed',
                  msg.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white'
                    : 'bg-[#f2f5fa] text-[#0b1220]'
                )}
              >
                {renderMessage(msg)}
              </div>
            ))}
            {loading && (
              <div className="mb-3 max-w-[85%] rounded-2xl bg-[#f2f5fa] px-4 py-2.5 text-[0.875rem] text-[#98a1b3]">
                Thinking...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#eef1f7] px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a question..."
                className="flex-1 rounded-full border border-[#e6eaf2] bg-[#f8fafd] px-4 py-2.5 text-[0.875rem] text-[#0b1220] outline-none transition-colors placeholder:text-[#c3cbd9] focus:border-blue-400"
              />
              <button
                type="button"
                onClick={send}
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700 disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

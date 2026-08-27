'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion';

export interface FaqItem {
  q: string;
  a: string;
}

const defaultFaqs: FaqItem[] = [
  {
    q: 'What exactly is GEO?',
    a: 'Generative Engine Optimization is the work of getting your brand named and cited inside AI-generated answers — ChatGPT, Perplexity, Claude, Google AI Overviews. It uses different levers than classic SEO: entity clarity, citable passages, structured data, and third-party corroboration.',
  },
  {
    q: 'How is this different from normal SEO?',
    a: 'SEO competes for a position in a list of links. GEO competes to be the source a model quotes. The technical foundations overlap, which is why we run both together rather than selling them as separate retainers.',
  },
  {
    q: 'How long until we see results?',
    a: 'Technical and structural fixes can shift AI citations within weeks. Competitive organic rankings usually take three to six months. We tell you which bucket your goals fall into before you commit anything.',
  },
  {
    q: 'Do you work with our existing site?',
    a: 'Usually yes. We only recommend a rebuild when the current platform is the thing holding back performance — and we show you the evidence before suggesting it.',
  },
  {
    q: 'What does it cost?',
    a: 'Plans start at $2,500 per month, month to month. Larger scopes are quoted after the audit so the number reflects real work rather than a guess.',
  },
  {
    q: 'What happens in the free audit?',
    a: 'We check where you currently appear in AI answers and organic search, identify the gaps that matter most, and send you the findings. There is no obligation, and you keep the audit either way.',
  },
];

interface FAQProps {
  items?: FaqItem[];
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FAQ({
  items = defaultFaqs,
  className,
  eyebrow = 'FAQ',
  title = 'Questions, answered',
  description = 'Still unsure? Ask us directly — every enquiry gets a personal reply.',
}: FAQProps) {
  // Everything starts collapsed — the visitor chooses what to open.
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={cn('section', className)} aria-labelledby="faq-heading">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
              <h2 id="faq-heading" className="heading text-h2 mt-5">
                {title}
              </h2>
              <p className="text-body mt-4">{description}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-[#e6eaf2] bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_10px_22px_-12px_rgba(37,99,235,0.9)]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5m-1 7l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </span>

                <p className="mt-5 text-[1.0625rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                  Still have a question?
                </p>
                <p className="text-body mt-2 text-[0.9375rem]">
                  We answer every message ourselves, usually within a day.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
                >
                  Ask us directly
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {items.map((faq, i) => {
                const isOpen = open === i;

                return (
                  <div
                    key={faq.q}
                    className={cn(
                      'overflow-hidden rounded-2xl border bg-white transition-all duration-500',
                      isOpen
                        ? 'border-blue-200 shadow-lift'
                        : 'border-[#e6eaf2] shadow-sm hover:border-[#cfdcf5]'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    >
                      <span
                        className={cn(
                          'text-[1.0625rem] font-medium tracking-[-0.015em] transition-colors duration-300',
                          isOpen ? 'text-blue-700' : 'text-[#0b1220]'
                        )}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={cn(
                          'relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                          isOpen
                            ? 'border-transparent bg-blue-600 text-white'
                            : 'border-[#e6eaf2] text-[#98a1b3]'
                        )}
                      >
                        <span className="absolute h-px w-3 bg-current" />
                        <span
                          className={cn(
                            'absolute h-3 w-px bg-current transition-transform duration-300',
                            isOpen && 'rotate-90'
                          )}
                        />
                      </span>
                    </button>

                    {/* Grid-rows trick: animates height without measuring it */}
                    <div
                      id={`faq-panel-${i}`}
                      className={cn(
                        'grid transition-all duration-400 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-body max-w-2xl px-6 pb-6">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

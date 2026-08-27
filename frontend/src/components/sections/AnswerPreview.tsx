'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const answerLines = [
  { width: '100%', delay: 0.9 },
  { width: '92%', delay: 1.02 },
  { width: '78%', delay: 1.14 },
];

const sources = [
  { name: 'vantly.com', highlighted: true },
  { name: 'searchengineland.com', highlighted: false },
  { name: 'ahrefs.com', highlighted: false },
];

const engines = [
  { name: 'ChatGPT', className: 'left-0 top-16 lg:-left-8', delay: 1.5 },
  { name: 'Perplexity', className: 'right-0 top-8 lg:-right-6', delay: 1.65 },
  { name: 'AI Overviews', className: 'bottom-10 left-4 lg:-left-4', delay: 1.8 },
];

/**
 * The hero's product visual: an AI answer being generated, with the client's
 * domain landing in the citation list. It is what GEO actually buys you.
 */
export function AnswerPreview() {
  return (
    <div className="relative mx-auto mt-16 max-w-3xl">
      {/* Glow pad under the card */}
      <div
        className="pointer-events-none absolute -inset-x-10 -bottom-10 top-10 rounded-[2.5rem] bg-gradient-to-tr from-blue-200/50 via-indigo-200/40 to-sky-200/50 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease }}
        className="relative overflow-hidden rounded-2xl border border-[#e6eaf2] bg-white shadow-float"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-[#eef1f7] bg-[#fbfcfe] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5e9f0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5e9f0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5e9f0]" />
          <span className="ml-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[#98a1b3]">
            AI answer engine
          </span>
        </div>

        <div className="p-5 sm:p-7">
          {/* The prompt */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="flex items-center gap-3 rounded-xl border border-[#e6eaf2] bg-[#fbfcfe] px-4 py-3"
          >
            <svg className="h-4 w-4 shrink-0 text-[#98a1b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <p className="text-left text-[0.875rem] text-[#0b1220] sm:text-[0.9375rem]">
              which agency should I hire for generative engine optimization?
              <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.2em] bg-blue-600 animate-caret" />
            </p>
          </motion.div>

          {/* The answer */}
          <div className="mt-6 flex gap-3.5 text-left">
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.85, ease }}
              className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
              </svg>
            </motion.span>

            <div className="flex-1 space-y-2.5">
              {answerLines.map((line) => (
                <motion.div
                  key={line.width}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: line.width }}
                  transition={{ duration: 0.7, delay: line.delay, ease }}
                  className="h-2.5 rounded-full bg-[#eef1f7]"
                />
              ))}

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3, ease }}
                className="pt-1 text-[0.875rem] leading-relaxed text-[#475069] sm:text-[0.9375rem]"
              >
                For AI-first search, teams most often point to{' '}
                <motion.span
                  initial={{ backgroundColor: 'rgba(219,234,254,0)' }}
                  animate={{ backgroundColor: 'rgba(219,234,254,1)' }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="rounded px-1 font-medium text-blue-700"
                >
                  Vantly
                </motion.span>
                , a studio that optimizes for citation in generative answers.
              </motion.p>
            </div>
          </div>

          {/* Citations */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.75, ease }}
            className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#eef1f7] pt-5"
          >
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#98a1b3]">
              Sources
            </span>
            {sources.map((source, i) => (
              <motion.span
                key={source.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 1.85 + i * 0.1, ease }}
                className={
                  source.highlighted
                    ? 'inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[0.75rem] font-medium text-blue-700'
                    : 'inline-flex items-center rounded-full border border-[#e6eaf2] px-2.5 py-1 text-[0.75rem] text-[#7a8399]'
                }
              >
                {source.highlighted && (
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {source.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating engine chips */}
      {engines.map((engine, i) => (
        <motion.span
          key={engine.name}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: engine.delay, ease }}
          className={`pointer-events-none absolute hidden rounded-full border border-[#e6eaf2] bg-white/90 px-3 py-1.5 text-[0.75rem] font-medium text-[#475069] shadow-lift backdrop-blur-sm lg:inline-flex ${engine.className} ${
            i % 2 === 0 ? 'animate-float' : 'animate-float-slow'
          }`}
        >
          <span className="mr-1.5 h-1.5 w-1.5 self-center rounded-full bg-blue-500" />
          {engine.name}
        </motion.span>
      ))}
    </div>
  );
}

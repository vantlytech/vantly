import type { CSSProperties } from 'react';
import { LogoMark } from '@/components/brand';
import { Counter } from '@/components/motion';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Overview', active: true, delay: 'delay-300' },
  { label: 'Analytics', active: false, delay: 'delay-300' },
  { label: 'GEO Metrics', active: false, delay: 'delay-400' },
  { label: 'SEO Ranking', active: false, delay: 'delay-400' },
  { label: 'Keywords', active: false, delay: 'delay-500' },
  { label: 'Reports', active: false, delay: 'delay-500' },
  { label: 'Content', active: false, delay: 'delay-600' },
  { label: 'Settings', active: false, delay: 'delay-600' },
];

const stats = [
  { value: 156, suffix: '', label: 'AI citations', delta: '+18%', tone: 'text-blue-600', delay: 'delay-300' },
  { value: 24.8, suffix: 'K', decimals: 1, label: 'Traffic', delta: '+32%', tone: 'text-emerald-600', delay: 'delay-400' },
  { value: 1250, suffix: '', label: 'Keywords', delta: '+64', tone: 'text-indigo-600', delay: 'delay-500' },
  { value: 92, suffix: '', label: 'Health', delta: '+7', tone: 'text-sky-600', delay: 'delay-600' },
];

const keywords = [
  { term: 'generative engine optimization', score: 94, delay: 'delay-700' },
  { term: 'ai search visibility', score: 81, delay: 'delay-800' },
  { term: 'llm citation strategy', score: 73, delay: 'delay-900' },
  { term: 'geo agency', score: 66, delay: 'delay-1000' },
];

/** Three trend lines, traced left-to-right on load. */
const series = [
  { d: 'M0 78 L34 70 L68 74 L102 58 L136 48 L170 52 L204 34 L238 26 L272 14', color: '#2563eb', delay: 'delay-700' },
  { d: 'M0 92 L34 88 L68 80 L102 84 L136 68 L170 62 L204 66 L238 48 L272 40', color: '#10b981', delay: 'delay-800' },
  { d: 'M0 104 L34 100 L68 102 L102 92 L136 94 L170 82 L204 78 L238 70 L272 62', color: '#8b5cf6', delay: 'delay-900' },
];

/**
 * The hero's product mock. Animated entirely in CSS so it lands even if the
 * bundle is slow — nothing here stays invisible waiting on JS.
 */
export function DashboardPreview() {
  return (
    <div className="animate-rise delay-200 relative">
      {/* Glow pad */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-200/60 via-indigo-200/40 to-sky-200/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-[#e6eaf2] bg-white shadow-float">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-[10.5rem] shrink-0 border-r border-[#eef1f7] bg-[#fbfcfe] p-4 sm:block">
            <div className="flex items-center gap-1.5 px-1.5">
              <LogoMark priority className="h-3.5 w-auto" />
              <span className="text-[0.875rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                Vantly
              </span>
            </div>

            <nav className="mt-5 space-y-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    'animate-rise flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.75rem]',
                    item.delay,
                    item.active ? 'bg-blue-600 font-medium text-white' : 'text-[#7a8399]'
                  )}
                >
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-[3px]',
                      item.active ? 'bg-white/80' : 'bg-[#d3dbe9]'
                    )}
                  />
                  {item.label}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main panel */}
          <div className="min-w-0 flex-1 p-4 sm:p-6">
            <div className="animate-rise delay-200 flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.9375rem] font-semibold text-[#0b1220]">Welcome back, Alex</p>
                <p className="mt-1 text-[0.75rem] text-[#98a1b3]">
                  Your AI and organic visibility this month
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full border border-[#e6eaf2] px-2.5 py-1 text-[0.6875rem] text-[#7a8399] sm:inline-block">
                Last 30 days
              </span>
            </div>

            {/* Stat tiles */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    'animate-rise rounded-xl border border-[#eef1f7] bg-[#fbfcfe] p-3 sm:p-4',
                    stat.delay
                  )}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-[1.25rem] font-semibold tracking-[-0.03em] text-[#0b1220]">
                      <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                    </span>
                    <span className={cn('text-[0.625rem] font-medium', stat.tone)}>{stat.delta}</span>
                  </div>
                  <p className="mt-1 text-[0.6875rem] leading-tight text-[#98a1b3]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Chart + keywords */}
            <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:gap-3.5 lg:grid-cols-[1.35fr_1fr]">
              <div className="animate-rise delay-500 rounded-xl border border-[#eef1f7] p-3.5 sm:p-4">
                <div className="flex items-center justify-between">
                  <p className="whitespace-nowrap text-[0.8125rem] font-semibold text-[#0b1220]">
                    AI visibility
                  </p>
                  <div className="flex items-center gap-2">
                    {['#2563eb', '#10b981', '#8b5cf6'].map((color) => (
                      <span
                        key={color}
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <svg viewBox="0 0 272 120" className="mt-3 h-28 w-full sm:mt-4 sm:h-36" fill="none" aria-hidden="true">
                  {[24, 52, 80, 108].map((y) => (
                    <line key={y} x1="0" y1={y} x2="272" y2={y} stroke="#eef1f7" strokeWidth="1" />
                  ))}
                  {series.map((line) => (
                    <path
                      key={line.color}
                      d={line.d}
                      stroke={line.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn('animate-rise', line.delay)}
                    />
                  ))}
                </svg>
              </div>

              <div className="animate-rise delay-600 rounded-xl border border-[#eef1f7] p-3.5 sm:p-4">
                <p className="text-[0.8125rem] font-semibold text-[#0b1220]">Top keywords</p>
                <ul className="mt-3 space-y-2.5" role="list">
                  {keywords.map((keyword) => (
                    <li key={keyword.term}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-[0.6875rem] text-[#5b6478]">{keyword.term}</span>
                        <span className="text-[0.6875rem] font-medium text-[#0b1220]">
                          {keyword.score}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#eef1f7]">
                        <div
                          className={cn(
                            'animate-grow-bar h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500',
                            keyword.delay
                          )}
                          style={{ '--bar-width': keyword.score + '%' } as CSSProperties}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI insight callout */}
            <div className="animate-rise delay-700 mt-3 flex items-center gap-2.5 rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 sm:mt-4 sm:gap-3 sm:p-4">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
                </svg>
              </span>
              <p className="min-w-0 flex-1 text-[0.75rem] leading-snug text-[#3f485c]">
                <span className="font-semibold text-blue-800">AI insight:</span> 3 pages are one fix
                away from being cited.
              </p>
              <span className="hidden shrink-0 rounded-full bg-blue-600 px-3 py-1.5 text-[0.6875rem] font-medium text-white sm:inline-block">
                View report
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <span className="animate-rise delay-800 pointer-events-none absolute -top-3 left-10 -translate-y-full hidden items-center gap-1.5 rounded-full border border-[#e6eaf2] bg-white px-3 py-1.5 text-[0.6875rem] font-medium text-[#0b1220] shadow-lift lg:inline-flex">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Cited by ChatGPT
      </span>

      <span className="animate-rise delay-900 pointer-events-none absolute -bottom-3 right-10 translate-y-full hidden items-center gap-1.5 rounded-full border border-[#e6eaf2] bg-white px-3 py-1.5 text-[0.6875rem] font-medium text-[#0b1220] shadow-lift lg:inline-flex">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        Rank #1 · 12 terms
      </span>
    </div>
  );
}

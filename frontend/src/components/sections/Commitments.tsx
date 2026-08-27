import { cn } from '@/lib/utils';
import { Counter, Stagger, StaggerItem, Reveal } from '@/components/motion';

/**
 * Deliberately promises rather than borrowed client numbers — these are
 * things a new studio can actually be held to.
 */
const commitments = [
  {
    value: 24,
    suffix: 'h',
    label: 'Reply to every enquiry',
    detail: 'Yes or no, always with a reason',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l2.5 2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 90,
    suffix: '-day',
    label: 'Plan before we start',
    detail: 'Scope, milestones, and success metrics',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: '%',
    label: 'Work you can inspect',
    detail: 'Your dashboards, your data, your access',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      </svg>
    ),
  },
  {
    value: 0,
    suffix: '',
    label: 'Lock-in contracts',
    detail: 'Month to month, cancel with 30 days',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 11V7a4 4 0 118 0M6 11h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 011-1z" />
      </svg>
    ),
  },
];

export function Commitments({ className }: { className?: string }) {
  return (
    <section className={cn('relative overflow-hidden', className)} aria-labelledby="commitments-heading">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#dbe6f8] bg-gradient-to-br from-[#f4f8ff] via-white to-[#eef4ff] px-6 py-14 lg:px-14 lg:py-16">
            {/* Light, drifting colour so the panel has depth without going dark */}
            <div
              className="animate-float-slow pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="animate-float pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

            <div className="relative">
              <span className="eyebrow">Our promise</span>

              <h2 id="commitments-heading" className="heading text-h2 mt-5 max-w-lg text-[#0b1220]">
                What you can hold us to
              </h2>
              <p className="text-lede mt-3 max-w-md">
                We are early, so we compete on the things that do not require a decade of case
                studies.
              </p>

              <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
                {commitments.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="group h-full rounded-2xl border border-[#e6eaf2] bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lift">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                        {item.icon}
                      </span>

                      <div className="display mt-5 text-[2.25rem] text-blue-700">
                        <Counter value={item.value} suffix={item.suffix} />
                      </div>
                      <div className="mt-1.5 text-[0.9375rem] font-semibold text-[#0b1220]">
                        {item.label}
                      </div>
                      <div className="mt-1 text-[0.8125rem] leading-relaxed text-[#7a8399]">
                        {item.detail}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

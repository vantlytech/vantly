import { cn } from '@/lib/utils';
import { SectionIntro } from './SectionIntro';
import { Stagger, StaggerItem } from '@/components/motion';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We measure where you stand today — in classic search and inside AI answers — and show you the exact gaps.',
    detail: 'Free, no obligation',
    accent: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.2-4.2m1.7-4.3a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'A plan built around your goals, budget, and timeline. Prioritized by impact, not by what is easiest to bill.',
    detail: 'Week 1–2',
    accent: 'from-sky-500 to-blue-600',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We ship the work: technical fixes, structured data, content, links, and pages engineered to be cited.',
    detail: 'Ongoing sprints',
    accent: 'from-indigo-500 to-violet-600',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.5 20l5-16M18 8l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Compound',
    description:
      'We track citations, rankings, and revenue — then double down on whatever is actually moving.',
    detail: 'Monthly reporting',
    accent: 'from-violet-500 to-fuchsia-600',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 17l6-6 4 4 7-7m0 0h-5m5 0v5" />
      </svg>
    ),
  },
];

export function HowItWorks({ className }: { className?: string }) {
  return (
    <section
      id="how-it-works"
      className={cn('section scroll-mt-24 border-y border-[#eef1f7] bg-soft', className)}
      aria-labelledby="how-heading"
    >
      <div className="shell">
        <SectionIntro
          id="how-heading"
          eyebrow="How it works"
          title="Four steps, no mystery"
          description="From first audit to compounding results — you always know what stage you are in."
        />

        <Stagger className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
          {/* The rail the cards sit on */}
          <div
            className="pointer-events-none absolute inset-x-8 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-[#d8e2f4] to-transparent lg:block"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <StaggerItem key={step.number} className="h-full">
              <div className="group relative flex h-full flex-col rounded-2xl border border-[#e6eaf2] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_10px_22px_-12px_rgba(37,99,235,0.9)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3',
                      step.accent
                    )}
                  >
                    {step.icon}
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-[#c3cbd9] transition-colors duration-500 group-hover:text-blue-500">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-body text-[#5b6478]">{step.description}</p>

                <p className="mt-auto pt-6">
                  <span className="inline-flex rounded-full bg-[#f4f7fc] px-2.5 py-1 text-[0.75rem] font-medium text-[#7a8399] transition-colors duration-500 group-hover:bg-blue-50 group-hover:text-blue-700">
                    {step.detail}
                  </span>
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

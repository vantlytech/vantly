import { cn } from '@/lib/utils';
import { SectionIntro } from './SectionIntro';
import { Stagger, StaggerItem, Reveal } from '@/components/motion';

interface Principle {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const principles: Principle[] = [
  {
    number: '01',
    title: 'Transparent process',
    description:
      'You will know exactly what we are doing and why, at every stage. No black-box reporting, no vanity dashboards.',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Modern techniques',
    description:
      'We optimize for how people actually search today — AI answer engines included, not Google alone.',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Fair pricing',
    description:
      'No bloated retainers. You pay for the work that moves the needle, and nothing that does not.',
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2m0-8c1.1 0 2.1.4 2.6 1M12 8V6.5m0 9.5v1.5m0-1.5c-1.1 0-2.1-.4-2.6-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function TrustSignals({ className }: { className?: string }) {
  return (
    <section className={cn('section', className)} aria-labelledby="why-heading">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              id="why-heading"
              align="left"
              eyebrow="Why Vantly"
              title="Not a typical agency"
              description="We are small on purpose. That is what lets us stay senior, stay fast, and stay honest about what works."
            />

            <Reveal delay={0.2}>
              <div className="mt-9 rounded-2xl border border-[#e6eaf2] bg-gradient-to-br from-[#f8fbff] to-white p-6">
                <p className="text-body text-[#475069]">
                  &ldquo;We would rather tell you the work is not worth doing than bill you for it.&rdquo;
                </p>
                <p className="mt-4 flex items-center gap-2.5 text-[0.8125rem] text-[#7a8399]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[0.6875rem] font-semibold text-white">
                    V
                  </span>
                  How we work, in one line
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="grid grid-cols-1 gap-4">
              {principles.map((principle) => (
                <StaggerItem key={principle.title}>
                  <div className="group flex items-start gap-5 rounded-2xl border border-[#e6eaf2] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e6eaf2] bg-[#fbfcfe] text-blue-600 transition-all duration-500 group-hover:border-transparent group-hover:bg-blue-600 group-hover:text-white">
                      {principle.icon}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                          {principle.title}
                        </h3>
                        <span className="font-mono text-[0.625rem] tracking-[0.2em] text-[#c3cbd9]">
                          {principle.number}
                        </span>
                      </div>
                      <p className="mt-2 text-body text-[#5b6478]">{principle.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

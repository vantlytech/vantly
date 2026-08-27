import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion';

interface CTAProps {
  title?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  /** Small reassurance line under the buttons. */
  assurances?: string[];
  className?: string;
}

export function CTA({
  title = 'Ready to be the answer?',
  description = 'Tell us where you want to be in twelve months. We will tell you honestly whether we can get you there — and send you a free visibility audit either way.',
  primaryCTA = { label: 'Get a free visibility audit', href: '/contact' },
  secondaryCTA = { label: 'View pricing', href: '/pricing' },
  assurances = ['Reply within 24 hours', 'No obligation', 'You keep the audit'],
  className,
}: CTAProps) {
  return (
    <section className={cn('section-tight', className)} aria-labelledby="cta-heading">
      <div className="shell">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-blue-700 px-6 py-16 text-center shadow-[0_30px_70px_-24px_rgba(29,78,216,0.5)] lg:px-16 lg:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900"
              aria-hidden="true"
            />
            <div
              className="animate-float-slow pointer-events-none absolute -top-32 left-1/3 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="animate-float pointer-events-none absolute -bottom-28 right-0 h-72 w-[28rem] rounded-full bg-indigo-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden="true" />

            <div className="relative mx-auto max-w-2xl">
              <h2 id="cta-heading" className="display text-h2 text-balance text-white">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[1.125rem] leading-relaxed text-pretty text-blue-100">
                {description}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primaryCTA.href} variant="inverse" size="lg" className="w-full sm:w-auto">
                  {primaryCTA.label}
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button
                  href={secondaryCTA.href}
                  variant="ghost"
                  size="lg"
                  className="w-full border border-white/30 text-white hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  {secondaryCTA.label}
                </Button>
              </div>

              {assurances.length > 0 && (
                <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" role="list">
                  {assurances.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-[0.8125rem] text-blue-200">
                      <svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

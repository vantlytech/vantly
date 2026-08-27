import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { DashboardPreview } from './DashboardPreview';

interface HeroProps {
  eyebrow?: string;
  /** Shown below 640px, where the full eyebrow wraps. Defaults to `eyebrow`. */
  eyebrowShort?: string;
  title?: React.ReactNode;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  /** The animated dashboard mock + split layout. Off for interior pages. */
  showPreview?: boolean;
  microcopy?: string[];
  className?: string;
}

const servicePills = [
  {
    label: 'GEO Services',
    className: 'border-blue-100 bg-blue-50 text-blue-700',
    dot: 'bg-blue-500',
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      </svg>
    ),
  },
  {
    label: 'SEO Services',
    className: 'border-emerald-100 bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.2-4.2m1.7-4.3a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    ),
  },
  {
    label: 'Website Development',
    className: 'border-violet-100 bg-violet-50 text-violet-700',
    dot: 'bg-violet-500',
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 20l5-16M18 8l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export function Hero({
  eyebrow = 'Grow smarter. Rank higher. Convert more.',
  eyebrowShort = 'Grow smarter. Rank higher.',
  title,
  description = 'At Vantly, we combine GEO, SEO, and cutting-edge website development to build digital experiences that rank, engage, and scale.',
  primaryCTA = { label: 'Get started now', href: 'https://calendly.com/vantlytech/30min' },
  secondaryCTA = { label: 'Explore services', href: '/services' },
  showPreview = true,
  microcopy = ['No long contracts', 'Founder-led delivery', 'Reporting you can verify'],
  className,
}: HeroProps) {
  /* ---------- Interior pages: centred, no dashboard ---------- */
  if (!showPreview) {
    return (
      <section
        className={cn('relative overflow-hidden pt-14 pb-14 lg:pt-20 lg:pb-20', className)}
        aria-labelledby="hero-title"
      >
        <div className="aurora" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />

        <div className="shell relative">
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <div className="animate-rise flex justify-center">
                <span className="eyebrow">{eyebrow}</span>
              </div>
            )}
            <h1
              id="hero-title" className="animate-rise delay-100 display text-h1 mt-6 text-balance"
            >
              {title ?? 'We build digital growth engines'}
            </h1>
            <p className="animate-rise delay-200 text-lede mx-auto mt-6 max-w-xl text-pretty">
              {description}
            </p>
            <div className="animate-rise delay-300 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryCTA.href} variant="primary" size="lg" className="w-full sm:w-auto">
                {primaryCTA.label}
              </Button>
              <Button href={secondaryCTA.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                {secondaryCTA.label}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Home: split layout with the live dashboard ---------- */
  return (
    <section
      className={cn('relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20', className)}
      aria-labelledby="hero-title"
    >
      <div className="aurora" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-10 xl:gap-12">
          {/* Copy */}
          <div>
            {eyebrow && (
              <div className="animate-rise">
                <span className="eyebrow normal-case text-[0.625rem] tracking-[0.01em] sm:text-[0.6875rem] sm:tracking-[0.02em]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-blue-500" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                  </span>
                  <span className="sm:hidden">{eyebrowShort ?? eyebrow}</span>
                  <span className="hidden sm:inline">{eyebrow}</span>
                </span>
              </div>
            )}

            <h1
              id="hero-title" className="animate-rise delay-100 display text-hero mt-5 max-w-[15ch] text-balance sm:mt-6"
            >
              {title ?? (
                <>
                  AI-Powered <span className="text-gradient-animated">Growth</span> for Modern
                  Businesses
                </>
              )}
            </h1>

            <p className="animate-rise delay-200 text-lede mt-4 max-w-lg text-pretty sm:mt-6">
              {description}
            </p>

            <div className="animate-rise delay-300 mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
              {servicePills.map((pill) => (
                <span
                  key={pill.label}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.75rem] font-medium transition-transform duration-300 hover:-translate-y-0.5 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-[0.8125rem]',
                    pill.className
                  )}
                >
                  {pill.icon}
                  {pill.label}
                </span>
              ))}
            </div>

            <div className="animate-rise delay-400 mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">
              <Button href={primaryCTA.href} variant="primary" size="lg" className="w-full sm:w-auto">
                {primaryCTA.label}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button href={secondaryCTA.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                {secondaryCTA.label}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>

            {microcopy.length > 0 && (
              <ul className="animate-rise delay-500 mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 sm:mt-7 sm:gap-x-6 sm:gap-y-2" role="list">
                {microcopy.map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-[0.8125rem] text-[#7a8399]">
                    <svg className="h-3.5 w-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Dashboard */}
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

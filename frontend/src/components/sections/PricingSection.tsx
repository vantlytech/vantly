import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { SectionIntro } from './SectionIntro';
import { Stagger, StaggerItem, Reveal } from '@/components/motion';

interface PricingTier {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string; target?: string; rel?: string };
  popular?: boolean;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Audit',
    price: '$199',
    description: 'A comprehensive SEO + GEO audit of your current online presence, with a clear action plan you can implement yourself or hand to us.',
    features: [
      'Full technical SEO audit',
      'GEO / AI-citation readiness check',
      'Competitor gap analysis',
      '30-minute strategy call to walk through findings',
    ],
    cta: { label: 'Book a Slot', href: 'https://calendly.com/vantlytech/30min', target: '_blank', rel: 'noopener noreferrer' },
    badge: 'Best for: Testing us out, low commitment',
  },
  {
    name: 'Growth Package',
    price: '$799',
    cadence: '/month',
    description: 'Ongoing SEO and GEO optimization to grow your organic and AI-search visibility month over month.',
    features: [
      'Everything in Starter Audit',
      'Monthly content optimization',
      'Structured data / schema implementation',
      'Monthly performance reporting',
      'Direct Slack / email access',
    ],
    cta: { label: 'Book a Slot', href: 'https://calendly.com/vantlytech/30min', target: '_blank', rel: 'noopener noreferrer' },
    popular: true,
    badge: 'Best for: Businesses ready to grow consistently',
  },
  {
    name: 'Full Partnership',
    price: 'Custom',
    description: 'The complete package — SEO, GEO, and ongoing web development support, treated as an extension of your team.',
    features: [
      'Everything in Growth Package',
      'Custom web development & maintenance',
      'Priority support & faster turnaround',
      'Quarterly strategy sessions',
    ],
    cta: { label: 'Book a Slot', href: 'https://calendly.com/vantlytech/30min', target: '_blank', rel: 'noopener noreferrer' },
    badge: 'Best for: Businesses wanting a full digital partner',
  },
];

interface PricingSectionProps {
  className?: string;
  withIntro?: boolean;
}

export function PricingSection({ className, withIntro = false }: PricingSectionProps) {
  return (
    <section className={cn('section-tight', className)} aria-labelledby="pricing-heading">
      <div className="shell">
        {withIntro && (
          <SectionIntro
            id="pricing-heading"
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="Choose the plan that fits your stage. Every plan includes a 30-day satisfaction guarantee."
            className="mb-14"
          />
        )}

        <Stagger className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3" step={0.1}>
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl p-8 transition-all duration-500',
                  tier.popular
                    ? 'border-2 border-blue-500 bg-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.4)] lg:-mt-4 lg:mb-[-1rem]'
                    : 'border border-[#e6eaf2] bg-white shadow-sm hover:-translate-y-1 hover:shadow-lift'
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white shadow-brand">
                    Most popular
                  </span>
                )}

                <h3 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                  {tier.name}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-[#7a8399]">{tier.description}</p>

                <div className="mt-7 flex items-baseline gap-1">
                  <span className="display text-[2.5rem]">{tier.price}</span>
                  <span className="text-sm text-[#7a8399]">{tier.cadence}</span>
                </div>

                <div className="my-7 h-px bg-[#eef1f7]" />

                <ul className="flex-1 space-y-3" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[0.875rem] text-[#475069]">
                      <svg className="mt-[0.3rem] h-3.5 w-3.5 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={tier.cta.href}
                  target={tier.cta.target}
                  rel={tier.cta.rel}
                  variant={tier.popular ? 'primary' : 'secondary'}
                  className="mt-9 w-full"
                >
                  {tier.cta.label}
                </Button>

                {tier.badge && (
                  <p className="mt-4 text-center text-[0.8125rem] text-[#7a8399]">
                    {tier.badge}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[0.875rem] text-[#7a8399]">
            Not sure yet? Start with the Starter Audit — if we don&apos;t find at least 5 actionable improvements, you get a full refund.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

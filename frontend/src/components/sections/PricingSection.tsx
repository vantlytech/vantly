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
  cta: { label: string; href: string };
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$2,500',
    cadence: '/month',
    description: 'For small businesses laying real foundations.',
    features: [
      'Technical SEO audit',
      'Keyword research (20 keywords)',
      'On-page optimization (10 pages)',
      'Monthly reporting',
      'Email support',
    ],
    cta: { label: 'Get started', href: '/contact?plan=starter' },
  },
  {
    name: 'Growth',
    price: '$5,000',
    cadence: '/month',
    description: 'For companies ready to scale organic and AI visibility.',
    features: [
      'Everything in Starter',
      'GEO optimization (AI search)',
      'Content strategy & creation (4/mo)',
      'Link building campaign',
      'Weekly check-ins',
      'Priority support',
    ],
    cta: { label: 'Start growing', href: '/contact?plan=growth' },
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$10,000+',
    cadence: '/month',
    description: 'For established brands with complex requirements.',
    features: [
      'Everything in Growth',
      'Custom development projects',
      'Dedicated senior lead',
      'Advanced analytics & dashboards',
      'Multi-language SEO',
      'Priority incident response',
      'SLA guarantees',
    ],
    cta: { label: 'Contact sales', href: '/contact?plan=enterprise' },
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
                  variant={tier.popular ? 'primary' : 'secondary'}
                  className="mt-9 w-full"
                >
                  {tier.cta.label}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[0.875rem] text-[#7a8399]">
            All plans are month-to-month. Annual billing saves 15%.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

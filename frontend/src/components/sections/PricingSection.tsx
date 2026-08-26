'use client';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses starting their digital journey.',
    features: [
      'Technical SEO audit',
      'Keyword research (20 keywords)',
      'On-page optimization (10 pages)',
      'Monthly reporting',
      'Email support',
    ],
    cta: { label: 'Get Started', href: '/contact?plan=starter' },
  },
  {
    name: 'Growth',
    price: '$5,000',
    description: 'For growing companies ready to scale their organic presence.',
    features: [
      'Everything in Starter',
      'GEO optimization (AI search)',
      'Content strategy & creation (4/mo)',
      'Link building campaign',
      'Weekly check-ins',
      'Priority support',
    ],
    cta: { label: 'Start Growing', href: '/contact?plan=growth' },
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$10,000+',
    description: 'Custom solutions for established brands with complex needs.',
    features: [
      'Everything in Growth',
      'Custom development projects',
      'Dedicated account manager',
      'Advanced analytics & dashboards',
      'Multi-language SEO',
      '24/7 emergency support',
      'SLA guarantees',
    ],
    cta: { label: 'Contact Sales', href: '/contact?plan=enterprise' },
  },
];

interface PricingSectionProps {
  className?: string;
}

export function PricingSection({ className }: PricingSectionProps) {
  return (
    <section className={cn('py-20 lg:py-32 bg-white dark:bg-gray-950', className)} aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your stage. All plans include a 30-day satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative p-8 bg-white dark:bg-gray-900 rounded-2xl border transition-all',
                tier.popular
                  ? 'border-blue-500 shadow-lg ring-2 ring-blue-500/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{tier.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8" role="list">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={cn('w-full', tier.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800')}
                asChild
              >
                <a href={tier.cta.href}>{tier.cta.label}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
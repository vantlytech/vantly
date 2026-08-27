'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface CTAProps {
  title?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  className?: string;
}

export function CTA({
  title = 'Ready to Grow Your Digital Presence?',
  description = 'Let\'s build a strategy that gets you found, chosen, and growing.',
  primaryCTA = { label: 'Start a Project', href: '/contact' },
  secondaryCTA = { label: 'View Pricing', href: '/pricing' },
  className,
}: CTAProps) {
  return (
    <section className={cn('py-20 lg:py-32 bg-gradient-mesh relative overflow-hidden', className)} aria-labelledby="cta-heading">
      <div className="absolute inset-0 cta-gradient-overlay" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={primaryCTA.href}>
            <Button variant="glass-primary" size="lg" className="w-full sm:w-auto">
              {primaryCTA.label}
            </Button>
          </Link>
          <Link href={secondaryCTA.href}>
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              {secondaryCTA.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
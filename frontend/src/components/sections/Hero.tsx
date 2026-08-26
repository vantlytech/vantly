'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface HeroProps {
  title?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  className?: string;
}

export function Hero({
  title = 'We Build Digital Growth Engines',
  description = 'From Generative Engine Optimization to SEO and custom web development — we help ambitious brands get found, get chosen, and grow faster.',
  primaryCTA = { label: 'Start a Project', href: '/contact' },
  secondaryCTA = { label: 'View Our Work', href: '/case-studies' },
  className,
}: HeroProps) {
  return (
    <section className={cn('relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32 dark:from-gray-900 dark:to-gray-950', className)} aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            We Build Digital{' '}
            <span className="text-blue-600 dark:text-blue-400">Growth Engines</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={primaryCTA.href}>
              <Button size="lg" className="w-full sm:w-auto">
                {primaryCTA.label}
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {secondaryCTA.label}
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Active Clients' },
            { value: '3', label: 'Core Services' },
            { value: '98%', label: 'Client Retention' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
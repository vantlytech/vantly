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

const trustCards = [
  {
    title: 'Founder-Led',
    description: 'Direct, hands-on work with every client, no account managers',
  },
  {
    title: 'Modern Stack',
    description: 'Built with the latest GEO, SEO, and web development practices',
  },
  {
    title: 'Early Access',
    description: 'Now accepting a limited number of founding clients',
  },
];

export function Hero({
  title = 'We Build Digital Growth Engines',
  description = 'From Generative Engine Optimization to SEO and custom web development — we help ambitious brands get found, get chosen, and grow faster.',
  primaryCTA = { label: 'Start a Project', href: '/contact' },
  secondaryCTA = { label: 'View Our Work', href: '/case-studies' },
  className,
}: HeroProps) {
  return (
    <section
      className={cn('relative overflow-hidden bg-gradient-mesh py-20 lg:py-32', className)}
      aria-labelledby="hero-title"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full orb-blue blur-3xl orb-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full orb-purple blur-3xl orb-blob" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full orb-cyan blur-3xl orb-blob" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            We Build Digital{' '}
            <span className="text-blue-400 relative">
              Growth Engines
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-width" />
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
            <Link href={primaryCTA.href}>
              <Button variant="glass-primary" size="lg" className="w-full sm:w-auto group">
                <span className="relative z-10 flex items-center gap-2">
                  {primaryCTA.label}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button variant="glass" size="lg" className="w-full sm:w-auto group">
                <span className="relative z-10 flex items-center gap-2">
                  {secondaryCTA.label}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {trustCards.map((card, index) => (
            <div
              key={card.title}
              className="text-center p-6 glass rounded-xl animate-fade-in-up hover:shadow-2xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-xl font-semibold text-white mb-2">{card.title}</div>
              <div className="text-sm text-gray-400">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
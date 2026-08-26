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

const bgPattern = `data:image/svg+xml;base64,${btoa(`
<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" opacity="0.04">
  <defs>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" stroke-width="0.5"/>
    </pattern>
    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="currentColor"/>
    </pattern>
  </defs>
  <rect width="60" height="60" fill="url(#grid)"/>
  <rect width="60" height="60" fill="url(#dots)"/>
</svg>
`)}`;

const bgGradientMesh = `data:image/svg+xml;base64,${btoa(`
<svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <defs>
    <radialGradient id="grad1" cx="20%" cy="30%" r="50%" fx="20%" fy="30%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="grad2" cx="80%" cy="70%" r="50%" fx="80%" fy="70%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="grad3" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad1)"/>
  <rect width="800" height="600" fill="url(#grad2)"/>
  <rect width="800" height="600" fill="url(#grad3)"/>
</svg>
`)}`;

export function Hero({
  title = 'We Build Digital Growth Engines',
  description = 'From Generative Engine Optimization to SEO and custom web development — we help ambitious brands get found, get chosen, and grow faster.',
  primaryCTA = { label: 'Start a Project', href: '/contact' },
  secondaryCTA = { label: 'View Our Work', href: '/case-studies' },
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32 dark:from-gray-900 dark:to-gray-950',
        className
      )}
      aria-labelledby="hero-title"
      style={{
        backgroundImage: `url("${bgGradientMesh}"), url("${bgPattern}")`,
        backgroundSize: 'cover, 60px 60px',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, repeat',
      }}
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            We Build Digital{' '}
            <span className="text-blue-600 dark:text-blue-400 relative">
              Growth Engines
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-width" />
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
            <Link href={primaryCTA.href}>
              <Button 
                size="lg" 
                className={cn(
                  'w-full sm:w-auto group relative overflow-hidden',
                  'shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20',
                  'hover:shadow-xl hover:shadow-blue-500/35 dark:hover:shadow-blue-500/30',
                  'hover:-translate-y-1 active:translate-y-0',
                  'transition-all duration-300 ease-out',
                  'focus-visible:ring-4 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2'
                )}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  {primaryCTA.label}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button 
                variant="outline" 
                size="lg" 
                className={cn(
                  'w-full sm:w-auto group relative overflow-hidden',
                  'border-2 border-gray-300 dark:border-gray-600',
                  'hover:border-blue-500 dark:hover:border-blue-400',
                  'hover:bg-blue-50 dark:hover:bg-blue-900/20',
                  'hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10',
                  'hover:-translate-y-1 active:translate-y-0',
                  'transition-all duration-300 ease-out',
                  'focus-visible:ring-4 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2'
                )}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Active Clients' },
            { value: '3', label: 'Core Services' },
            { value: '98%', label: 'Client Retention' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm animate-fade-in-up hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 animate-count-up" data-target={stat.value}>{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
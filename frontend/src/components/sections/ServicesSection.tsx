'use client';

import { cn } from '@/lib/utils';

interface Service {
  name: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  href: string;
}

const services: Service[] = [
  {
    name: 'GEO',
    description: 'Generative Engine Optimization — optimize your content for AI-powered search engines like ChatGPT, Perplexity, and Google SGE.',
    benefits: [
      'AI citation optimization',
      'Structured data for LLMs',
      'Content authority building',
      'Conversational query targeting',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services/geo',
  },
  {
    name: 'SEO',
    description: 'Search Engine Optimization — drive sustainable organic traffic with technical SEO, content strategy, and link building.',
    benefits: [
      'Technical site audits',
      'Keyword research & strategy',
      'Content optimization',
      'Authority link building',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    href: '/services/seo',
  },
  {
    name: 'Web Dev',
    description: 'Custom website development — fast, accessible, and conversion-focused websites built with modern technologies.',
    benefits: [
      'Next.js & React development',
      'Performance optimization',
      'WCAG accessibility',
      'CMS integration',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/web-dev',
  },
];

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section className={cn('py-20 lg:py-32 bg-black', className)} aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Three specialized services designed to work together for maximum digital impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="glass rounded-2xl p-8 h-full hover:shadow-2xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl glass-strong">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6" role="list">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn more
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SectionIntro } from './SectionIntro';
import { Stagger, StaggerItem } from '@/components/motion';

interface Service {
  index: string;
  name: string;
  summary: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  href: string;
  accent: string;
}

const services: Service[] = [
  {
    index: '01',
    name: 'GEO',
    summary: 'Generative Engine Optimization',
    description:
      'Be the source AI answers cite. We shape your content, entities, and structured data for ChatGPT, Perplexity, Claude, and Google AI Overviews.',
    benefits: ['AI citation optimization', 'Structured data for LLMs', 'Entity & authority building', 'Conversational query targeting'],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l1.9 5.4L19 9.3l-5.1 1.9L12 16.6l-1.9-5.4L5 9.3l5.1-1.9L12 2zM18.8 14.4l.9 2.5 2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9.9-2.5zM5.2 15.6l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9z" />
      </svg>
    ),
    href: '/services/geo',
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    index: '02',
    name: 'SEO',
    summary: 'Search Engine Optimization',
    description:
      'Compounding organic growth built on technical health, real topical authority, and content people genuinely want to read.',
    benefits: ['Technical site audits', 'Keyword research & strategy', 'Content optimization', 'Authority link building'],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-5.2-5.2m2.2-4.8a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    href: '/services/seo',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    index: '03',
    name: 'Web',
    summary: 'Website Development',
    description:
      'Fast, accessible, conversion-focused sites built on Next.js — designed to rank, engineered to last, easy for your team to run.',
    benefits: ['Next.js & React development', 'Core Web Vitals tuning', 'WCAG accessibility', 'CMS integration'],
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.5 20l5-16M18 8l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/web-dev',
    accent: 'from-indigo-500 to-violet-600',
  },
];

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section className={cn('section', className)} aria-labelledby="services-heading">
      <div className="shell">
        <SectionIntro
          id="services-heading"
          eyebrow="What we do"
          title="Three disciplines, one growth system"
          description="Each service stands on its own. Run together, they compound."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.name} as="article" className="h-full">
              <div className="card card-hover group relative flex h-full flex-col overflow-hidden p-8">
                {/* Accent rail that draws in on hover */}
                <span
                  className={cn(
                    'absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 ease-out group-hover:scale-x-100',
                    service.accent
                  )}
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_10px_22px_-12px_rgba(37,99,235,0.8)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3',
                      service.accent
                    )}
                  >
                    {service.icon}
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-[#c3cbd9]">
                    {service.index}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-[#0b1220]">
                  {service.name}
                </h3>
                <p className="mt-1 text-[0.8125rem] font-medium text-blue-600">{service.summary}</p>
                <p className="mt-4 text-body text-[#5b6478]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5" role="list">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-[0.875rem] text-[#475069]">
                      <svg className="mt-[0.3rem] h-3.5 w-3.5 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[0.875rem] font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
                >
                  Explore {service.name}
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

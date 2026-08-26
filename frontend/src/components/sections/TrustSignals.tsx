'use client';

import { cn } from '@/lib/utils';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    content: 'Vantly transformed our organic traffic. Their GEO strategy got us cited in AI responses within 3 months.',
    author: 'Sarah Chen',
    role: 'VP Marketing',
    company: 'TechFlow Inc.',
  },
  {
    content: 'The team rebuilt our site from scratch. Page speed went from 42 to 98, and conversions doubled.',
    author: 'Marcus Johnson',
    role: 'Founder',
    company: 'ScaleUp Labs',
  },
  {
    content: 'Best SEO agency we have worked with. Transparent reporting, real results, no fluff.',
    author: 'Emily Rodriguez',
    role: 'CMO',
    company: 'GreenLeaf Commerce',
  },
];

const logos = [
  'TechFlow',
  'ScaleUp Labs',
  'GreenLeaf',
  'DataCore',
  'Nexus Digital',
  'Apex Analytics',
];

interface TrustSignalsProps {
  className?: string;
}

export function TrustSignals({ className }: TrustSignalsProps) {
  return (
    <section className={cn('py-20 lg:py-32 bg-gray-50 dark:bg-gray-900', className)} aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="trust-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Growing Companies
          </h2>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-12 text-gray-400 dark:text-gray-500 opacity-60" role="list" aria-label="Client logos">
            {logos.map((logo) => (
              <div key={logo} className="text-lg font-semibold" role="listitem">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex gap-1 mb-4" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
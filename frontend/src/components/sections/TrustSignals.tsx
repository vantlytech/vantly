'use client';

import { cn } from '@/lib/utils';

interface WhyCard {
  title: string;
  description: string;
}

const whyCards: WhyCard[] = [
  {
    title: 'Transparent Process',
    description: 'You\'ll know exactly what we\'re doing and why, at every stage of the project',
  },
  {
    title: 'Modern Techniques',
    description: 'We optimize for how people actually search today — including AI answer engines, not just Google',
  },
  {
    title: 'Fair Pricing',
    description: 'No bloated retainers. Pay for what moves the needle for your business',
  },
];

export function TrustSignals({ className }: { className?: string }) {
  return (
    <section className={cn('py-20 lg:py-32 bg-gradient-mesh', className)} aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Work With Us
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            We\'re not a typical agency. Here\'s what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {whyCards.map((card, index) => (
            <div
              key={card.title}
              className="p-6 glass rounded-2xl hover:shadow-2xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
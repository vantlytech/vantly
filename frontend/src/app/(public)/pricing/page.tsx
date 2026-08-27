import { Metadata } from 'next';
import { PageHeader } from '@/components/sections';
import { PricingSection } from '@/components/sections';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for GEO, SEO, and Website Development services. Choose the plan that fits your stage.',
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Simple, Transparent Pricing"
        description="No hidden fees. No long-term contracts. Just clear pricing for measurable results."
      />
      <PricingSection />
      
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.' },
              { q: 'Is there a setup fee?', a: 'No setup fees on any plan. You only pay the monthly rate.' },
              { q: 'What\'s the contract length?', a: 'Month-to-month. Cancel anytime with 30 days notice. Annual plans available at a 15% discount.' },
              { q: 'Do you offer refunds?', a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy, we\'ll refund your first month.' },
              { q: 'What payment methods do you accept?', a: 'Credit card, ACH/bank transfer, and wire for annual enterprise contracts.' },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-gray-900 dark:text-white">
                  {faq.q}
                  <svg className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Need a Custom Plan?"
        description="Enterprise needs? Multi-location? Custom requirements? Let's talk about a tailored solution."
      />
    </>
  );
}
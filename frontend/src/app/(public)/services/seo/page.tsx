import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'SEO (Search Engine Optimization)',
  description: 'Drive sustainable organic traffic with technical SEO, content strategy, and authority link building. Long-term growth that compounds.',
};

const seoBenefits = [
  'Technical SEO audits & fixes',
  'Keyword research & topical mapping',
  'Content strategy & optimization',
  'Authority link building (white-hat)',
  'Local SEO & GBP optimization',
  'International & multi-language SEO',
  'Core Web Vitals optimization',
  'Monthly reporting & analytics',
];

const seoProcess = [
  { step: '01', title: 'Discovery & Audit', description: 'Comprehensive technical, content, and backlink audit. Identify quick wins and strategic opportunities.' },
  { step: '02', title: 'Keyword Strategy', description: 'Map search intent, cluster topics, and prioritize keywords by business value and difficulty.' },
  { step: '03', title: 'Technical Foundation', description: 'Fix crawl errors, optimize site architecture, improve speed, and implement schema markup.' },
  { step: '04', title: 'Content Optimization', description: 'Optimize existing pages, create new pillar content, and build topical authority clusters.' },
  { step: '05', title: 'Authority Building', description: 'Earn high-quality backlinks through digital PR, partnerships, and linkable assets.' },
  { step: '06', title: 'Measure & Scale', description: 'Track rankings, traffic, and conversions. Double down on what works, pivot what doesn\'t.' },
];

export default function SEOPage() {
  return (
    <>
      <Hero
        title="Search Engine Optimization (SEO)"
        description="Sustainable organic growth that compounds over time. Technical excellence, strategic content, and earned authority."
        primaryCTA={{ label: 'Free SEO Audit', href: '/contact?service=seo' }}
        secondaryCTA={{ label: 'View Pricing', href: '/pricing' }}
      />

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="benefits-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What Our SEO Covers
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {seoBenefits.map((benefit, index) => (
              <div key={benefit} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 flex items-center justify-center">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our SEO Process
            </h2>
          </div>

          <div className="space-y-8">
            {seoProcess.map((step) => (
              <div key={step.step} className="flex gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Grow Your Organic Traffic?"
        description="SEO is a long-term investment. The best time to start was yesterday. The second best time is now."
      />
    </>
  );
}
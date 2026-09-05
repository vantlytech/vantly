import { PageHeader, ServiceDetail, CTA } from '@/components/sections';
import { createPageMetadata } from '@/lib/metadata';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata = createPageMetadata({
  title: 'SEO (Search Engine Optimization)',
  description: 'Drive sustainable organic traffic with technical SEO, content strategy, and authority link building. Long-term growth that compounds.',
  path: '/services/seo',
});

const seoBenefits = [
  'Technical SEO audits & fixes',
  'Keyword research & topical mapping',
  'Content strategy & optimization',
  'Authority link building (white-hat)',
  'Local SEO & Google Business Profile',
  'International & multi-language SEO',
  'Core Web Vitals optimization',
  'Monthly reporting & analytics',
];

const seoProcess = [
  { step: '01', title: 'Discovery & audit', description: 'Comprehensive technical, content, and backlink audit. Identify quick wins and strategic opportunities.' },
  { step: '02', title: 'Keyword strategy', description: 'Map search intent, cluster topics, and prioritize keywords by business value and difficulty.' },
  { step: '03', title: 'Technical foundation', description: 'Fix crawl errors, optimize site architecture, improve speed, and implement schema markup.' },
  { step: '04', title: 'Content optimization', description: 'Optimize existing pages, create new pillar content, and build topical authority clusters.' },
  { step: '05', title: 'Authority building', description: 'Earn high-quality backlinks through digital PR, partnerships, and genuinely linkable assets.' },
  { step: '06', title: 'Measure & scale', description: 'Track rankings, traffic, and conversions. Double down on what works, pivot on what does not.' },
];

export default function SEOPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Services', path: '/services' },
          { name: 'Search Engine Optimization', path: '/services/seo' },
        ])}
      />
      <PageHeader
        eyebrow="Service — SEO"
        title="Growth that compounds"
        description="Technical excellence, strategic content, and earned authority — the slow-burning kind that keeps paying."
      />

      <ServiceDetail
        capabilitiesTitle="What our SEO covers"
        capabilitiesDescription="One engagement, the full surface area of organic search."
        capabilities={seoBenefits}
        processTitle="Our SEO process"
        processDescription="A sequence built to fix the foundations first, then scale what works."
        process={seoProcess}
      />

      <CTA
        title="Ready to own your search results?"
        description="Let us map the fastest path from where you rank today to where you should."
      />
    </>
  );
}

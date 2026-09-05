import { PageHeader, CTA } from '@/components/sections';
import { Stagger, StaggerItem } from '@/components/motion';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Case Studies',
  description: 'See how we\'ve helped companies grow through GEO, SEO, and custom website development. Real results from real clients.',
  path: '/case-studies',
});

const caseStudies = [
  {
    title: 'TechFlow Inc.',
    tagline: 'SaaS Platform',
    services: ['GEO', 'SEO'],
    results: [
      { metric: '340%', label: 'AI Citation Increase' },
      { metric: '180%', label: 'Organic Traffic Growth' },
      { metric: '45%', label: 'Conversion Rate Lift' },
    ],
    description: 'Implemented comprehensive GEO + SEO strategy for B2B SaaS platform. Achieved top AI citations for 50+ target queries within 6 months.',
    logo: 'TF',
  },
  {
    title: 'ScaleUp Labs',
    tagline: 'E-commerce',
    services: ['Web Dev', 'SEO'],
    results: [
      { metric: '98', label: 'PageSpeed Score' },
      { metric: '2.3x', label: 'Revenue Increase' },
      { metric: '65%', label: 'Bounce Rate Reduction' },
    ],
    description: 'Rebuilt e-commerce platform on Next.js with headless Shopify. Core Web Vitals optimization drove massive conversion improvements.',
    logo: 'SL',
  },
  {
    title: 'GreenLeaf Commerce',
    tagline: 'DTC Brand',
    services: ['SEO', 'Content'],
    results: [
      { metric: '520%', label: 'Non-Brand Traffic' },
      { metric: '89', label: 'Keywords in Top 3' },
      { metric: '$2.1M', label: 'Attributed Revenue' },
    ],
    description: 'Content-led SEO strategy for sustainable DTC brand. Built topical authority in competitive wellness space.',
    logo: 'GL',
  },
  {
    title: 'DataCore Analytics',
    tagline: 'B2B Data Platform',
    services: ['GEO', 'Web Dev'],
    results: [
      { metric: '12', label: 'AI Citations/Month' },
      { metric: '3.2x', label: 'Demo Requests' },
      { metric: '40%', label: 'Sales Cycle Reduction' },
    ],
    description: 'Custom web app with integrated GEO strategy. Technical documentation optimized for AI retrieval drove qualified enterprise leads.',
    logo: 'DC',
  },
  {
    title: 'Nexus Digital Agency',
    tagline: 'Marketing Agency',
    services: ['SEO', 'GEO'],
    results: [
      { metric: '280%', label: 'Lead Volume Increase' },
      { metric: '15', label: 'Page 1 Rankings' },
      { metric: '67%', label: 'Cost Per Lead Reduction' },
    ],
    description: 'Agency\'s own marketing transformation. Demonstrated expertise by ranking for high-competition agency keywords.',
    logo: 'ND',
  },
  {
    title: 'Apex FinTech',
    tagline: 'Financial Services',
    services: ['Web Dev', 'SEO', 'GEO'],
    results: [
      { metric: 'WCAG AAA', label: 'Accessibility' },
      { metric: '95+', label: 'All Core Web Vitals' },
      { metric: 'SOC2', label: 'Compliance Ready' },
    ],
    description: 'Full-stack fintech platform with regulatory compliance. Accessibility-first approach with integrated SEO/GEO from launch.',
    logo: 'AF',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Our work speaks for itself"
        description="Real results from real clients, across industries."
      />

      <section className="section-tight" aria-labelledby="case-studies-heading">
        <div className="shell">
          <h2 id="case-studies-heading" className="sr-only">
            Case studies
          </h2>

          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" step={0.08}>
            {caseStudies.map((study) => (
              <StaggerItem key={study.title} as="article" className="h-full">
                <div className="card card-hover group flex h-full flex-col p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-[0.8125rem] font-semibold tracking-[0.02em] text-white shadow-[0_10px_22px_-12px_rgba(37,99,235,0.9)] transition-transform duration-500 group-hover:scale-110">
                      {study.logo}
                    </span>
                    <span className="rounded-full bg-[#f4f7fc] px-2.5 py-1 text-[0.75rem] text-[#7a8399]">
                      {study.tagline}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-body text-[#5b6478]">
                    {study.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[0.6875rem] font-medium tracking-[0.04em] text-blue-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <dl className="mt-7 grid grid-cols-3 gap-4 rounded-xl bg-[#f8fafd] p-4">
                    {study.results.map((result) => (
                      <div key={result.label}>
                        <dt className="sr-only">{result.label}</dt>
                        <dd>
                          <span className="display block text-[1.375rem] text-blue-700">{result.metric}</span>
                          <span className="mt-1.5 block text-[0.6875rem] leading-tight text-[#7a8399]">
                            {result.label}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <a
                    href="https://calendly.com/vantlytech/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[0.875rem] font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
                  >
                    Discuss a project like this
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA
        title="Want to be our next case study?"
        description="We are looking for ambitious partners. Let us discuss your goals and see if we are a fit."
      />
    </>
  );
}

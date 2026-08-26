import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { CTA } from '@/components/sections';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how we\'ve helped companies grow through GEO, SEO, and custom website development. Real results from real clients.',
};

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
    color: 'blue',
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
    color: 'green',
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
    color: 'emerald',
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
    color: 'purple',
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
    color: 'orange',
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
    color: 'indigo',
  },
];

const colorClasses = {
  blue: 'glass-strong bg-blue-500/20 text-blue-400 border border-blue-500/30',
  green: 'glass-strong bg-green-500/20 text-green-400 border border-green-500/30',
  emerald: 'glass-strong bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  purple: 'glass-strong bg-purple-500/20 text-purple-400 border border-purple-500/30',
  orange: 'glass-strong bg-orange-500/20 text-orange-400 border border-orange-500/30',
  indigo: 'glass-strong bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        title="Our Work Speaks for Itself"
        description="Real results from real clients. See how we've helped companies across industries achieve measurable digital growth."
        className="py-16 lg:py-24"
      />

      <section className="py-20 lg:py-32 bg-black" aria-labelledby="case-studies-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="glass rounded-2xl p-6 h-full hover:shadow-2xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold', colorClasses[study.color as keyof typeof colorClasses])}>
                    {study.logo}
                  </div>
                  <span className="text-sm font-medium text-gray-400">{study.tagline}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.map((service) => (
                    <span key={service} className="px-2 py-0.5 text-xs font-medium glass text-gray-300 rounded">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center p-4 glass-subtle rounded-xl">
                      <div className="text-2xl font-bold text-white">{result.metric}</div>
                      <div className="text-xs text-gray-500">{result.label}</div>
                    </div>
                  ))}
                </div>
                <a href="/contact" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want to Be Our Next Case Study?"
        description="We're looking for ambitious partners. Let's discuss your goals and see if we're a fit."
      />
    </>
  );
}
import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { CTA } from '@/components/sections';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'GEO (Generative Engine Optimization)',
  description: 'Optimize your content for AI-powered search engines like ChatGPT, Perplexity, and Google SGE. Get cited in AI responses and capture the future of search.',
};

const geoBenefits = [
  'AI citation optimization for ChatGPT, Perplexity, Claude',
  'Google SGE / AI Overviews preparation',
  'Structured data & schema markup for LLMs',
  'Content authority & E-E-A-T signals for AI',
  'Conversational query research & targeting',
  'AI-friendly content structure & formatting',
  'Entity optimization & knowledge graph presence',
  'Monthly AI visibility reporting',
];

const geoProcess = [
  { step: '01', title: 'AI Search Audit', description: 'Analyze current AI visibility, identify citation gaps, and benchmark against competitors in AI responses.' },
  { step: '02', title: 'Strategy & Keywords', description: 'Research conversational queries, map user intent, and build topic clusters optimized for LLM retrieval.' },
  { step: '03', title: 'Technical Implementation', description: 'Deploy structured data, optimize content structure, and ensure crawlability for AI crawlers.' },
  { step: '04', title: 'Content Optimization', description: 'Rewrite and create content with AI-friendly formatting, citations, and authoritative signals.' },
  { step: '05', title: 'Authority Building', description: 'Earn citations from trusted sources, build entity recognition, and strengthen knowledge graph presence.' },
  { step: '06', title: 'Monitor & Iterate', description: 'Track AI citations, measure visibility changes, and continuously optimize based on results.' },
];

export default function GEOPage() {
  return (
    <>
      <Hero
        title="Generative Engine Optimization (GEO)"
        description="Be the answer AI gives. Optimize for ChatGPT, Perplexity, Google SGE, and the new era of search."
        primaryCTA={{ label: 'Start GEO Audit', href: '/contact?service=geo' }}
        secondaryCTA={{ label: 'View Pricing', href: '/pricing' }}
      />

      <section className="py-20 lg:py-32 bg-black" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="benefits-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why GEO Matters Now
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              AI search is replacing traditional search. Users get answers directly from LLMs without clicking links. If you are not cited, you do not exist.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {geoBenefits.map((benefit, index) => (
              <div key={benefit} className={cn('p-6 glass rounded-xl hover:shadow-xl hover:border-white/20 transition-all duration-300')}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg glass-strong bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-black" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our GEO Process
            </h2>
          </div>

          <div className="space-y-8">
            {geoProcess.map((step) => (
              <div key={step.step} className={cn('flex gap-6 p-6 glass rounded-xl hover:shadow-xl hover:border-white/20 transition-all duration-300')}>
                <div className="flex-shrink-0 w-14 h-14 rounded-xl glass-strong bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Optimize for AI Search?"
        description="Early adopters of GEO capture disproportionate AI visibility. Let's build your AI search presence."
      />
    </>
  );
}
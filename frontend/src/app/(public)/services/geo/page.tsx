import { Metadata } from 'next';
import { PageHeader, ServiceDetail, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'GEO (Generative Engine Optimization)',
  description: 'Optimize your content for AI-powered search engines like ChatGPT, Perplexity, and Google SGE. Get cited in AI responses and capture the future of search.',
};

const geoBenefits = [
  'AI citation optimization for ChatGPT, Perplexity, Claude',
  'Google AI Overviews preparation',
  'Structured data & schema markup for LLMs',
  'Content authority & E-E-A-T signals for AI',
  'Conversational query research & targeting',
  'AI-friendly content structure & formatting',
  'Entity optimization & knowledge graph presence',
  'Monthly AI visibility reporting',
];

const geoProcess = [
  { step: '01', title: 'AI search audit', description: 'Analyze current AI visibility, identify citation gaps, and benchmark against competitors in AI answers.' },
  { step: '02', title: 'Strategy & keywords', description: 'Research conversational queries, map user intent, and build topic clusters optimized for LLM retrieval.' },
  { step: '03', title: 'Technical implementation', description: 'Deploy structured data, optimize content structure, and ensure crawlability for AI crawlers.' },
  { step: '04', title: 'Content optimization', description: 'Rewrite and create content with AI-friendly formatting, citations, and authoritative signals.' },
  { step: '05', title: 'Authority building', description: 'Earn citations from trusted sources, build entity recognition, and strengthen knowledge graph presence.' },
  { step: '06', title: 'Monitor & iterate', description: 'Track AI citations, measure visibility changes, and continuously optimize based on results.' },
];

export default function GEOPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service — GEO"
        title="Be the answer AI gives"
        description="Generative Engine Optimization for ChatGPT, Perplexity, Claude, and Google AI Overviews."
      />

      <ServiceDetail
        capabilitiesTitle="Why GEO matters now"
        capabilitiesDescription="AI search is reshaping discovery. People get answers directly from models, without clicking through. If you are not cited, you are not in the conversation."
        capabilities={geoBenefits}
        processTitle="Our GEO process"
        processDescription="Six stages, from first audit to a compounding citation footprint."
        process={geoProcess}
      />

      <CTA
        title="Ready to optimize for AI search?"
        description="Early movers on GEO capture disproportionate visibility. Let us build your presence in AI answers."
      />
    </>
  );
}

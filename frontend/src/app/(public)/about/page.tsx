import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { CTA } from '@/components/sections';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vantly — our mission, values, and approach to digital growth.',
};

const values = [
  { title: 'Results First', description: 'We measure success by your growth, not our hours. Every strategy ties to measurable business outcomes.' },
  { title: 'Radical Transparency', description: 'No black boxes. You see our work, our reasoning, and our results in real-time dashboards.' },
  { title: 'Continuous Learning', description: 'Search evolves daily. We invest 20% of our time in R&D to stay ahead of algorithm changes.' },
  { title: 'Partnership Mindset', description: 'We are an extension of your team. Your wins are our wins. We are in it for the long haul.' },
];

const approachSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We audit your current SEO, GEO, and web presence to identify what\'s working, what\'s not, and where the opportunities are.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We build a tailored plan based on your specific goals, budget, and timeline — no generic templates.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We implement changes with full transparency. You\'ll always know what we\'re doing and why.',
  },
  {
    number: '04',
    title: 'Measure',
    description: 'We track real metrics tied to business outcomes and adjust the strategy based on what\'s actually working.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="We Build Digital Growth Engines"
        description="Vantly was founded on a simple belief: businesses deserve digital marketing that actually works. No fluff, no black boxes — just measurable growth."
        primaryCTA={{ label: 'Work With Us', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Work', href: '/case-studies' }}
      />

      <section className="py-20 lg:py-32 bg-gradient-mesh" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 id="mission-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              To help ambitious companies get found, get chosen, and grow faster through the intersection of AI search, traditional SEO, and exceptional web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="p-6 glass rounded-xl hover:shadow-xl hover:border-white/20 transition-all duration-300 text-left">
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-mesh" aria-labelledby="approach-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 id="approach-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A clear, transparent process from first conversation to measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <div key={step.number} className="p-6 glass rounded-xl hover:shadow-xl hover:border-white/20 transition-all duration-300 text-left">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl glass-strong text-blue-400 font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Start?"
        description="Let's talk about your goals and see if we're a good fit."
        primaryCTA={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Work', href: '/case-studies' }}
      />
    </>
  );
}
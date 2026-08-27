import { Metadata } from 'next';
import { Hero, CTA, SectionIntro, Commitments } from '@/components/sections';
import { Stagger, StaggerItem } from '@/components/motion';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vantly — our mission, values, and approach to digital growth.',
};

const values = [
  { title: 'Results first', description: 'We measure success by your growth, not our hours. Every strategy ties back to a business outcome.' },
  { title: 'Radical transparency', description: 'No black boxes. You see the work, the reasoning, and the results as they happen.' },
  { title: 'Continuous learning', description: 'Search changes weekly. We reserve real time for research so our advice never goes stale.' },
  { title: 'Partnership mindset', description: 'We work as an extension of your team. Your wins are the only scoreboard that matters.' },
];

const approachSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We audit your SEO, GEO, and web presence to find what is working, what is not, and where the openings are.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We build a plan around your goals, budget, and timeline. No templates, no recycled decks.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We implement in the open. You always know what changed, when, and why it mattered.',
  },
  {
    number: '04',
    title: 'Measure',
    description: 'We track metrics tied to revenue and adjust the strategy around what is genuinely working.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Vantly"
        title={
          <>
            Marketing that{' '}
            <span className="text-gradient-animated">actually works</span>
          </>
        }
        description="Vantly was founded on a simple belief: businesses deserve digital work they can verify. No fluff, no black boxes — just measurable growth."
        primaryCTA={{ label: 'Work with us', href: '/contact' }}
        secondaryCTA={{ label: 'See our work', href: '/case-studies' }}
        showPreview={false}
        microcopy={[]}
      />

      <section className="section bg-soft border-y border-[#eef1f7]" aria-labelledby="mission-heading">
        <div className="shell">
          <SectionIntro
            id="mission-heading"
            eyebrow="Our mission"
            title="Help ambitious companies get found, get chosen, and grow"
            description="We work at the intersection of AI search, traditional SEO, and exceptional web experiences."
          />

          <Stagger className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2" step={0.08}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card card-hover h-full p-7">
                  <h3 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-body text-[#5b6478]">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-heading">
        <div className="shell">
          <SectionIntro
            id="approach-heading"
            eyebrow="Our approach"
            title="Four steps, no mystery"
            description="A clear, transparent process from first conversation to measurable results."
          />

          <Stagger className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
            {approachSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="group border-t-2 border-[#e6eaf2] pt-6 transition-colors duration-500 hover:border-blue-500">
                  <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-[#c3cbd9] transition-colors duration-500 group-hover:text-blue-600">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-body text-[#5b6478]">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Commitments className="pb-4 lg:pb-8" />

      <CTA
        title="Ready to start?"
        description="Tell us about your goals and we will tell you honestly whether we are the right fit."
        primaryCTA={{ label: 'Start a conversation', href: '/contact' }}
        secondaryCTA={{ label: 'See our work', href: '/case-studies' }}
      />
    </>
  );
}

import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { CTA } from '@/components/sections';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vantly — our mission, values, and the team behind your digital growth.',
};

const values = [
  { title: 'Results First', description: 'We measure success by your growth, not our hours. Every strategy ties to measurable business outcomes.' },
  { title: 'Radical Transparency', description: 'No black boxes. You see our work, our reasoning, and our results in real-time dashboards.' },
  { title: 'Continuous Learning', description: 'Search evolves daily. We invest 20% of our time in R&D to stay ahead of algorithm changes.' },
  { title: 'Partnership Mindset', description: 'We are an extension of your team. Your wins are our wins. We are in it for the long haul.' },
];

const team = [
  { name: 'Alex Chen', role: 'Founder & CEO', bio: 'Former Google Search engineer. 10+ years in SEO and AI. Built Vantly to bridge the gap between traditional SEO and the AI search future.', image: '/team/alex.jpg' },
  { name: 'Maria Santos', role: 'Head of Strategy', bio: 'Led growth at two Series B startups. Expert in content strategy, topical authority, and GEO methodology.', image: '/team/maria.jpg' },
  { name: 'James Park', role: 'Lead Developer', bio: 'Full-stack engineer specializing in Next.js, performance optimization, and headless architectures.', image: '/team/james.jpg' },
  { name: 'Priya Sharma', role: 'SEO Director', bio: 'Technical SEO specialist with enterprise experience. Speaker at BrightonSEO and MozCon.', image: '/team/priya.jpg' },
];

const milestones = [
  { year: '2022', title: 'Founded', description: 'Started as a two-person SEO consultancy in San Francisco.' },
  { year: '2023', title: 'GEO Pioneer', description: 'Launched first Generative Engine Optimization service offering.' },
  { year: '2024', title: 'Team Expansion', description: 'Grew to 12 people across strategy, development, and operations.' },
  { year: '2025', title: '50+ Clients', description: 'Served clients across SaaS, e-commerce, fintech, and professional services.' },
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

      <section className="py-20 lg:py-32 bg-black" aria-labelledby="mission-heading">
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

      <section className="py-20 lg:py-32 bg-black" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="team-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full glass-strong mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-blue-400">{member.role}</p>
                <p className="mt-2 text-sm text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-black" aria-labelledby="journey-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="journey-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Journey
            </h2>
          </div>

          <div className="mx-auto max-w-2xl">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-8 pb-12 border-l-2 border-gray-700 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-black -ml-2" />
                <div className="text-sm font-medium text-blue-400">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-white mt-1">{milestone.title}</h3>
                <p className="mt-1 text-gray-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want to Join the Journey?"
        description="We are always looking for talented people who share our values. Check out our open roles."
        primaryCTA={{ label: 'View Careers', href: '/careers' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
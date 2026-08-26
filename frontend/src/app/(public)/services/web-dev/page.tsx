import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Website Development',
  description: 'Custom websites built with Next.js, React, and modern web technologies. Fast, accessible, and conversion-focused.',
};

const devBenefits = [
  'Next.js 14 + React 18 + TypeScript',
  'Tailwind CSS for rapid, consistent styling',
  'WCAG 2.1 AA accessibility compliance',
  'Core Web Vitals optimization (90+ scores)',
  'Headless CMS integration (Contentful, Sanity, Strapi)',
  'E-commerce with Shopify or custom solutions',
  'SEO-ready architecture from day one',
  'Vercel/Netlify/AWS deployment & CI/CD',
];

const devProcess = [
  { step: '01', title: 'Discovery & Strategy', description: 'Define goals, user journeys, technical requirements, and success metrics. Create project roadmap.' },
  { step: '02', title: 'Design & Prototyping', description: 'Wireframes, high-fidelity designs, design system creation, and interactive prototypes for stakeholder review.' },
  { step: '03', title: 'Development Sprint', description: 'Component-driven development with Storybook, automated testing, and continuous integration.' },
  { step: '04', title: 'Content & CMS Setup', description: 'Configure headless CMS, migrate content, set up editorial workflows, and train your team.' },
  { step: '05', title: 'QA & Performance', description: 'Cross-browser testing, accessibility audit, load testing, and Core Web Vitals optimization.' },
  { step: '06', title: 'Launch & Support', description: 'Zero-downtime deployment, DNS configuration, monitoring setup, and 30-day post-launch support.' },
];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'PostgreSQL', 'Prisma', 'Vercel',
  'Contentful', 'Sanity', 'Shopify', 'Stripe',
];

export default function WebDevPage() {
  return (
    <>
      <Hero
        title="Custom Website Development"
        description="Fast, accessible, conversion-focused websites built with modern technology. Your digital foundation, done right."
        primaryCTA={{ label: 'Start a Project', href: '/contact?service=web-dev' }}
        secondaryCTA={{ label: 'View Pricing', href: '/pricing' }}
      />

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="benefits-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What We Build With
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {devBenefits.map((benefit, index) => (
              <div key={benefit} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 flex items-center justify-center">
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
              Our Development Process
            </h2>
          </div>

          <div className="space-y-8">
            {devProcess.map((step) => (
              <div key={step.step} className="flex gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 flex items-center justify-center text-xl font-bold">
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
        title="Ready to Build Something Great?"
        description="Whether you need a marketing site, web app, or e-commerce platform — let's discuss your vision."
      />
    </>
  );
}
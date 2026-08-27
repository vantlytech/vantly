import { Metadata } from 'next';
import { PageHeader, ServiceDetail, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Website Development',
  description: 'Custom websites built with Next.js, React, and modern web technologies. Fast, accessible, and conversion-focused.',
};

const devBenefits = [
  'Next.js, React & TypeScript',
  'Tailwind CSS design systems',
  'WCAG 2.1 AA accessibility compliance',
  'Core Web Vitals optimization (90+ scores)',
  'Headless CMS integration (Contentful, Sanity, Strapi)',
  'E-commerce with Shopify or custom builds',
  'SEO-ready architecture from day one',
  'Vercel, Netlify or AWS deployment & CI/CD',
];

const devProcess = [
  { step: '01', title: 'Discovery & strategy', description: 'Define goals, user journeys, technical requirements, and success metrics. Agree the roadmap.' },
  { step: '02', title: 'Design & prototyping', description: 'Wireframes, high-fidelity design, a real design system, and interactive prototypes to review.' },
  { step: '03', title: 'Development sprint', description: 'Component-driven development with automated testing and continuous integration.' },
  { step: '04', title: 'Content & CMS setup', description: 'Configure the headless CMS, migrate content, set up editorial workflows, and train your team.' },
  { step: '05', title: 'QA & performance', description: 'Cross-browser testing, accessibility audit, load testing, and Core Web Vitals tuning.' },
  { step: '06', title: 'Launch & support', description: 'Zero-downtime deployment, DNS, monitoring, and 30 days of post-launch support.' },
];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'PostgreSQL', 'Prisma', 'Vercel',
  'Contentful', 'Sanity', 'Shopify', 'Stripe',
];

export default function WebDevPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service — Web"
        title="Your digital foundation, done right"
        description="Fast, accessible, conversion-focused websites — engineered to rank and built to last."
      />

      <ServiceDetail
        capabilitiesTitle="What we build"
        capabilitiesDescription="Modern web engineering, with performance and accessibility as requirements rather than afterthoughts."
        capabilities={devBenefits}
        processTitle="Our development process"
        processDescription="From first workshop to a launched site you can actually maintain."
        process={devProcess}
        stackTitle="What we build with"
        stack={techStack}
      />

      <CTA
        title="Ready to build something fast?"
        description="Tell us what you need and we will scope it honestly — timeline, cost, and trade-offs included."
      />
    </>
  );
}

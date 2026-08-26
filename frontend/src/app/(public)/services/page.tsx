import { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { ServicesSection } from '@/components/sections';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our three core services: Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and Custom Website Development.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services That Drive Digital Growth"
        description="Three specialized services designed to work together for maximum impact. Choose one or combine all three for a complete digital strategy."
        primaryCTA={{ label: 'Start a Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Pricing', href: '/pricing' }}
      />
      <ServicesSection />
      <CTA />
    </>
  );
}
import { Metadata } from 'next';
import { PageHeader, ServicesSection, HowItWorks, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our three core services: Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and Custom Website Development.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Built to be found"
        description="Three specialized disciplines, designed to work together for maximum impact."
      />
      <ServicesSection />
      <HowItWorks />
      <CTA />
    </>
  );
}

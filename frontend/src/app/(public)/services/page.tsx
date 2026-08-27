import { Metadata } from 'next';
import { PageHeader } from '@/components/sections';
import { ServicesSection } from '@/components/sections';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our three core services: Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and Custom Website Development.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Three specialized services designed to work together for maximum impact."
      />
      <ServicesSection />
      <CTA />
    </>
  );
}
import { PageHeader, ServicesSection, HowItWorks, CTA } from '@/components/sections';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Our Services',
  description: 'Explore our three core services: Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and Custom Website Development.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Built to be found"
        description="Three specialized disciplines, designed to work together for maximum impact."
        background="dune"
      />
      <ServicesSection />
      <HowItWorks />
      <CTA />
    </>
  );
}

import { Hero } from '@/components/sections';
import { ServicesSection } from '@/components/sections';
import { TrustSignals } from '@/components/sections';
import { CTA } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TrustSignals />
      <CTA />
    </>
  );
}
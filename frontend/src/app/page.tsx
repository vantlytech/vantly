import {
  Hero,
  ReportSnapshot,
  TrustBar,
  EngineMarquee,
  ServicesSection,
  HowItWorks,
  GeoVsSeo,
  Commitments,
  TrustSignals,
  FAQ,
  CTA,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReportSnapshot />
      <TrustBar />
      <EngineMarquee className="mt-16 lg:mt-20" />
      <ServicesSection />
      <HowItWorks />
      <GeoVsSeo />
      <Commitments className="pb-4 lg:pb-8" />
      <TrustSignals />
      <FAQ className="bg-soft border-y border-[#eef1f7]" />
      <CTA />
    </>
  );
}

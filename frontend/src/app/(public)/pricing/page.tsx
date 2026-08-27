import { Metadata } from 'next';
import { PageHeader, PricingSection, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for GEO, SEO, and Website Development services. Choose the plan that fits your stage.',
};

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes. Upgrade or downgrade at any time — changes take effect at the start of your next billing cycle.' },
  { q: 'Is there a setup fee?', a: 'No setup fees on any plan. You only pay the monthly rate.' },
  { q: 'What is the contract length?', a: 'Month-to-month. Cancel anytime with 30 days notice. Annual plans are available at a 15% discount.' },
  { q: 'Do you offer refunds?', a: 'We offer a 30-day satisfaction guarantee. If you are not happy, we refund your first month.' },
  { q: 'What payment methods do you accept?', a: 'Credit card, ACH or bank transfer, and wire for annual enterprise contracts.' },
  { q: 'What if my needs do not fit a plan?', a: 'Tell us the scope and we will quote it. Most custom engagements start from the Growth tier and adjust from there.' },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="No hidden fees. No long-term contracts. Clear pricing for measurable results."
      />

      <PricingSection />

      <FAQ
        items={faqs}
        className="bg-soft border-y border-[#eef1f7]"
        title="Pricing questions"
        description="Anything else on your mind? Ask us directly — we answer every enquiry personally."
      />

      <CTA
        title="Need a custom plan?"
        description="Enterprise scope, multiple locations, or something unusual? Let us put together a tailored proposal."
      />
    </>
  );
}

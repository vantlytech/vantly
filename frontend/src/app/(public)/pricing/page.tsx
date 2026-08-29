import { Metadata } from 'next';
import { PageHeader, PricingSection, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for GEO, SEO, and Website Development services. Choose the plan that fits your stage.',
};

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes. Upgrade or downgrade at any time — changes take effect at the start of your next billing cycle.' },
  { q: 'Is there a setup fee?', a: 'No setup fees on any plan.' },
  { q: 'What is the contract length?', a: 'Month-to-month. Cancel anytime with 30 days notice. Annual plans are available at a 15% discount.' },
  { q: 'Do you offer refunds?', a: 'Yes — if our Starter Audit doesn\'t surface at least 5 actionable improvements for your business, we\'ll refund you in full.' },
  { q: 'What payment methods do you accept?', a: 'Credit card, ACH or bank transfer, and wire for annual enterprise contracts.' },
  { q: 'What if my needs do not fit a plan?', a: 'Tell us the scope and we will quote it. Most custom engagements start from the Growth & Partnership tier and adjust from there.' },
  { q: 'What\'s included in the Starter Audit?', a: 'A full technical SEO audit, a GEO/AI-citation readiness check, competitor gap analysis, and a 30-minute call to walk through the findings together — all for a one-time $199.' },
  { q: 'Why should I trust a new agency?', a: 'We\'re a new agency, and we\'re upfront about that. That means you get direct, hands-on attention from our core team on every project — not junior staff buried under dozens of accounts. Our Starter Audit is a low-risk way to see our work firsthand before committing to anything larger.' },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="No hidden fees. No long-term contracts. Clear pricing for measurable results."
      />

      <PricingSection highlightPopular />

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

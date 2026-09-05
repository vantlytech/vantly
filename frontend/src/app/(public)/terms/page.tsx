import { LegalLayout, LegalSection, LegalP, LegalList } from '@/components/legal';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Terms of Service',
  description: "Vantly's Terms of Service — the agreement governing use of our website and services.",
  path: '/terms',
});

const current = 'Terms of Service';
const lastUpdated = 'August 30, 2026';

export default function TermsPage() {
  return (
    <LegalLayout
      current={current}
      title="Terms of Service"
      description="The agreement between you and Vantly when using our website or engaging our services."
      lastUpdated={lastUpdated}
    >
      <LegalSection title="1. Introduction">
        <LegalP>
          These Terms of Service (&quot;Terms&quot;) form an agreement between you
          (&quot;you&quot; or &quot;client&quot;) and Vantly (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;). By accessing our website at vantly.tech or engaging our services, you
          agree to be bound by these Terms. If you do not agree with any part of these Terms,
          please do not use the website or our services.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Services Description">
        <LegalP>Vantly provides the following services:</LegalP>
        <LegalList
          items={[
            <>
              <strong>GEO (Generative Engine Optimization)</strong> — improving how often and how
              favorably your brand is cited by AI answer engines such as ChatGPT, Perplexity,
              Claude, and Google AI Overviews.
            </>,
            <>
              <strong>SEO (Search Engine Optimization)</strong> — technical, on-page, and
              off-page work to improve organic search visibility.
            </>,
            <>
              <strong>Website development</strong> — building and maintaining websites, typically
              with Next.js, React, and TypeScript.
            </>,
            'Focused audits of your current online presence, delivered as one-off reports or ongoing engagements.',
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Free Report / Audit Terms">
        <LegalP>
          The free SEO &amp; GEO snapshot report is provided free of charge and &quot;as
          is&quot;, for informational purposes only. It is intended to give you a high-level view
          of where your website currently stands. Because SEO and GEO outcomes depend on many
          external factors outside our control, we make no guarantee of specific results from the
          free report.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. Paid Services Terms">
        <LegalSection title="Starter Audit (one-time)">
          <LegalP>
            The Starter Audit is a one-time service priced at $199. It includes a full technical
            SEO audit, a GEO / AI-citation readiness check, a competitor gap analysis, and a
            30-minute strategy call to walk through the findings.
          </LegalP>
          <LegalP>
            <strong>Refund guarantee:</strong> if we do not identify at least five (5) actionable
            improvements for your business in the delivered audit, we will refund you in full.
          </LegalP>
        </LegalSection>

        <LegalSection title="Growth & Partnership (ongoing)">
          <LegalP>
            Ongoing engagements start at $799 per month and include a combination of content
            optimization, structured data / schema implementation, monthly performance reporting,
            direct Slack / email access, and — depending on scope — custom web development and
            maintenance, priority support, and quarterly strategy sessions.
          </LegalP>
          <LegalP>
            Ongoing engagements are month-to-month. Either party may cancel with 30 days&apos;
            written notice. Amounts billed through the end of the notice period are final and
            non-refundable.
          </LegalP>
        </LegalSection>
      </LegalSection>

      <LegalSection title="5. Payment Terms">
        <LegalP>
          Payment is due as follows: the one-time Starter Audit fee is due before work begins; for
          ongoing engagements, the monthly fee is due at the start of each billing cycle unless
          otherwise agreed in writing. We currently accept bank transfer only. Payment details will be
          shared upon confirming a service engagement.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Client Responsibilities">
        <LegalP>You agree to:</LegalP>
        <LegalList
          items={[
            'Provide accurate and up-to-date information about your business and website.',
            'Grant us timely access to the accounts, tools, and data needed to deliver the services.',
            'Provide feedback and approvals within reasonable timeframes so work can proceed on schedule.',
            'Notify us promptly of any material change to your business that could affect the services.',
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <LegalP>
          Once you have paid for a deliverable in full, you own the final deliverables produced
          for you under that engagement (for example, audit reports, content, and custom
          development work). We retain ownership of any pre-existing tools, processes, code
          libraries, and intellectual property we use to provide our services.
        </LegalP>
        <LegalP>
          We will only reference or showcase elements of our work with you in our portfolio,
          case studies, or marketing materials if you give us written permission to do so.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <LegalP>
          SEO and GEO results are never guaranteed: search behavior and ranking algorithms are
          controlled by third parties (search engines and AI providers) and are outside our
          control. To the fullest extent permitted by law:
        </LegalP>
        <LegalList
          items={[
            'We make no guarantee of specific rankings, traffic levels, or monetizable outcomes from any service.',
            'We will not be liable for any indirect, incidental, consequential, or punitive damages, including lost profits or lost business opportunities.',
            'Our total liability for any claim arising from our services is limited to the fees you paid us in the twelve (12) months preceding the claim.',
          ]}
        />
      </LegalSection>

      <LegalSection title="9. Termination">
        <LegalP>
          Either party may terminate an ongoing engagement with 30 days&apos; written notice. We
          may terminate an engagement or your access to our website immediately if you breach
          these Terms, fail to pay amounts due, or engage in activity that harms us or other
          clients. On termination, you must pay for any work already completed and any amounts
          due.
        </LegalP>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <LegalP>
          These Terms are governed by the laws of India. Any disputes arising under these Terms
          will be subject to the exclusive jurisdiction of the courts of India.
        </LegalP>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <LegalP>
          For questions about these Terms, contact us at{' '}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            href="mailto:info@vantly.tech"
          >
            info@vantly.tech
          </a>
          .
        </LegalP>
      </LegalSection>
    </LegalLayout>
  );
}
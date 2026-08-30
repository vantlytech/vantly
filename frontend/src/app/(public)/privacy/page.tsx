import { Metadata } from 'next';
import { LegalLayout, LegalSection, LegalP, LegalList } from '@/components/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "Vantly's Privacy Policy — how we collect, use, and protect your information.",
};

const current = 'Privacy Policy';
const lastUpdated = 'August 30, 2026';

export default function PrivacyPage() {
  return (
    <LegalLayout
      current={current}
      title="Privacy Policy"
      description="How Vantly collects, uses, stores, and protects your personal information."
      lastUpdated={lastUpdated}
    >
      <LegalSection title="1. Introduction">
        <LegalP>
          Vantly (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website
          vantly.tech and provides SEO, GEO (Generative Engine Optimization), and web development
          services. This Privacy Policy explains what personal information we collect when you use
          our website or engage our services, why we collect it, how we store it, and the rights
          you have over it.
        </LegalP>
        <LegalP>
          By using our website or submitting information to us, you agree to this policy. We will
          only process your personal information as described here.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <LegalP>We collect the following categories of information:</LegalP>
        <LegalList
          items={[
            <>
              <strong>Form submissions.</strong> When you request a free SEO &amp; GEO snapshot
              report, we collect the email address and website URL you submit through our report
              request form. If you later use a general contact form, we collect the details you
              enter there (such as your name, email address, and message).
            </>,
            <>
              <strong>Calendly booking data.</strong> When you book a call through Calendly
              (linked from our website), Calendly collects your name, email address, and
              scheduling details. This information is handled by Calendly under its own privacy
              policy, available at{' '}
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                calendly.com/privacy
              </a>
              .
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <LegalP>We use the personal information we collect for the following purposes:</LegalP>
        <LegalList
          items={[
            'To respond to your enquiries and questions.',
            'To deliver the free SEO & GEO snapshot report you requested.',
            'To send follow-up communication relevant to your enquiry, such as scheduling a call or clarifying your audit scope.',
            'To improve our website and services (using aggregate, non-identifying information only).',
          ]}
        />
        <LegalP>We do not sell, rent, or trade your personal information to third parties.</LegalP>
      </LegalSection>

      <LegalSection title="4. How We Store Your Information">
        <LegalP>
          Our technical setup is intentionally simple: we do not currently operate a customer
          database. When you submit a free report request, the details you provide are delivered
          to us as an email notification via Resend and received in our Gmail inbox. Your
          information is therefore stored within Google&apos;s systems (Gmail) for the business
          account we use, protected by standard account security measures.
        </LegalP>
        <LegalP>
          Information you enter during Calendly booking is stored by Calendly on its own systems,
          subject to Calendly&apos;s privacy policy and security practices.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Third-Party Services">
        <LegalP>
          We rely on a small number of third-party services to run our business. Each has its own
          privacy policy, which we encourage you to review:
        </LegalP>
        <LegalList
          items={[
            <>
              <strong>Calendly</strong> — call scheduling:{' '}
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                calendly.com/privacy
              </a>
            </>,
            <>
              <strong>Resend</strong> — transactional email delivery:{' '}
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                resend.com/legal/privacy-policy
              </a>
            </>,
            <>
              <strong>Google</strong> — email hosting for our business inbox:{' '}
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <LegalP>
          We keep information submitted through our forms for as long as we need it to respond to
          your enquiry, deliver the service you requested, and manage any follow-up. Because there
          is no separate database, this information lives in our business email inbox; we review
          and remove older enquiries periodically. You can ask us to delete your information at any
          time (see &quot;Your Rights&quot; below).
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <LegalP>You have the following rights over your personal information:</LegalP>
        <LegalList
          items={[
            'The right to request a copy of the information we hold about you.',
            'The right to request the deletion of your information.',
            'The right to opt out of any follow-up or marketing communications at any time.',
          ]}
        />
        <LegalP>
          To exercise any of these rights, contact us at{' '}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            href="mailto:vantlytech@gmail.com"
          >
            vantlytech@gmail.com
          </a>
          . We will respond within a reasonable timeframe.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <LegalP>
          Our website uses a small number of cookies, including essential cookies required for the
          site to function. We do not currently use analytics cookies. For full details, including
          how to control cookies through your browser, see our{' '}
          <a className="text-blue-600 underline underline-offset-2 hover:text-blue-700" href="/cookies">
            Cookie Policy
          </a>
          .
        </LegalP>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <LegalP>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, or legal obligations. When we do, we will revise the &quot;Last
          updated&quot; date at the top of this page. We encourage you to check back periodically.
        </LegalP>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <LegalP>
          If you have any questions about this Privacy Policy or how we handle your information,
          please contact us at{' '}
          <a
            className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            href="mailto:vantlytech@gmail.com"
          >
            vantlytech@gmail.com
          </a>
          .
        </LegalP>
      </LegalSection>
    </LegalLayout>
  );
}
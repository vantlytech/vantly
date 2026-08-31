import { Metadata } from 'next';
import { LegalLayout, LegalSection, LegalP, LegalList } from '@/components/legal';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: "Vantly's Cookie Policy — what cookies the site uses and how you can control them.",
};

const current = 'Cookie Policy';
const lastUpdated = 'August 30, 2026';

export default function CookiesPage() {
  return (
    <LegalLayout
      current={current}
      title="Cookie Policy"
      description="How Vantly uses cookies and similar technologies on the website, and how you can control them."
      lastUpdated={lastUpdated}
    >
      <LegalSection title="1. Introduction">
        <LegalP>
          Cookies are small text files stored on your device when you visit a website. They help
          websites work properly and, in some cases, remember your preferences or collect usage
          information. This Cookie Policy explains what cookies Vantly&apos;s website uses and
          how you can control them.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Types of Cookies We Use">
        <LegalP>We use the following categories of cookies:</LegalP>
        <LegalList
          items={[
            <>
              <strong>Essential / functional cookies.</strong> Cookies required for the basic
              operation of our website. Because they are strictly necessary, they do not require
              your consent.
            </>,
<>
            <strong>Third-party cookies.</strong> Cookies set by services other than our own
              website. Currently our website links to Calendly for scheduling but does not embed
              Calendly&apos;s scheduling widget directly, so Calendly does not set cookies on our
              pages. If we add an embedded scheduling widget or other third-party embeds in the
              future, we will list them below.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. How to Control Cookies">
        <LegalP>
          You can control and delete cookies through your browser settings. Most browsers let you:
        </LegalP>
        <LegalList
          items={[
            'Block or delete cookies entirely.',
            'Block only third-party cookies.',
            'Be notified before a cookie is set, so you can accept or decline it.',
          ]}
        />
        <LegalP>Instructions vary by browser. You can find specifics for the main browsers here:</LegalP>
        <LegalList
          items={[
            <>
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </>,
            <>
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </>,
            <>
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox
              </a>
            </>,
            <>
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Third-Party Cookies">
        <LegalP>
          We currently have no third-party services setting cookies on our website, because
          external tools (such as Calendly for scheduling) are linked to rather than embedded.
          For reference, the third parties we may interact with when you use their services have
          their own cookie policies:
        </LegalP>
        <LegalList
          items={[
            <>
              <strong>Calendly</strong> (scheduling):{' '}
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                calendly.com/privacy
              </a>
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Changes to This Policy">
        <LegalP>
          We may update this Cookie Policy from time to time — for example, if we add new cookies,
          embeds, or analytics tools. When we do, we will revise the &quot;Last updated&quot;
          date at the top of this page.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Contact Us">
        <LegalP>
          If you have any questions about our use of cookies, contact us at{' '}
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
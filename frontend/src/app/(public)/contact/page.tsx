import { Metadata } from 'next';
import { ContactForm } from '@/components/forms';
import { Reveal } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Vantly. We would love to hear about your project and discuss how we can help you grow.',
};

const details = [
  {
    label: 'Email',
    value: 'vantlytech@gmail.com',
    href: 'mailto:vantlytech@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  }]

const expectations = [
  'A reply within 24 hours — yes or no, with reasons',
  'A free visibility audit you keep either way',
  'No sales sequence, no drip campaign',
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32" aria-labelledby="contact-heading">
      <div className="aurora" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Contact</span>
              <h1 id="contact-heading" className="display text-h1 mt-5">
                Let us talk
              </h1>
              <p className="text-lede mt-5 max-w-md text-pretty">
                We are selective about the projects we take on, so we can do exceptional work on each
                one. Send us the details and we will tell you within 24 hours whether we are a fit.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-8 space-y-3" role="list">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-[#475069]">
                    <svg className="mt-[0.3rem] h-3.5 w-3.5 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 divide-y divide-[#eef1f7] border-y border-[#eef1f7]">
                {details.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-4 py-5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e6eaf2] bg-white text-blue-600 shadow-sm">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={detail.icon} />
                      </svg>
                    </span>
                    <div>
                      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#98a1b3]">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-[0.9375rem] text-[#0b1220]">
                        {detail.href ? (
                          <a href={detail.href} className="transition-colors hover:text-blue-700">
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15} direction="left">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

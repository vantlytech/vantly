import Link from 'next/link';
import { Logo } from '@/components/brand';
import { Button } from '@/components/ui';

const footerLinks = [
  {
    heading: 'Services',
    links: [
      { name: 'GEO — AI search', href: '/services/geo' },
      { name: 'SEO', href: '/services/seo' },
      { name: 'Web development', href: '/services/web-dev' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Case studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { name: 'Privacy policy', href: '/privacy' },
      { name: 'Terms of service', href: '/terms' },
      { name: 'Cookie policy', href: '/cookies' },
    ],
  },
];

const socialLinks = [
  {
    name: 'X',
    href: 'https://twitter.com',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[#e9edf5] bg-[#f8fafd]" role="contentinfo">
      <div className="shell py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-body text-[#5b6478]">
              A small studio building growth engines for ambitious brands — across AI answer
              engines, organic search, and the web itself.
            </p>

            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e6eaf2] bg-white text-[#7a8399] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-[0_8px_18px_-10px_rgba(11,18,32,0.3)]"
                >
                  <svg className="h-[0.9375rem] w-[0.9375rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading} className="lg:col-span-2">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#98a1b3]">
                {group.heading}
              </h3>
              <ul className="mt-5 space-y-3" role="list">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[0.9375rem] text-[#475069] transition-colors duration-300 hover:text-blue-700"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#98a1b3]">
              Get started
            </h3>
            <p className="mt-5 text-body text-[#5b6478]">
              Free visibility audit, no strings.
            </p>
            <Button href="https://calendly.com/vantlytech/30min" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" className="mt-4">
              Request audit
            </Button>

            <div className="mt-6">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#98a1b3]">
                Connect
              </h3>
              <a
                href="mailto:vantlytech@gmail.com"
                className="mt-3 flex items-center gap-2 text-[0.9375rem] text-[#475069] transition-colors duration-300 hover:text-blue-700"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                vantlytech@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#e9edf5] pt-8 sm:flex-row">
          <p className="text-[0.8125rem] text-[#98a1b3]">
            &copy; {new Date().getFullYear()} Vantly. All rights reserved.
          </p>
          <p className="text-[0.8125rem] text-[#98a1b3]">Built for the way people search now.</p>
        </div>
      </div>
    </footer>
  );
}

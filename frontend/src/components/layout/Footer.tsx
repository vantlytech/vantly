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
                href="mailto:info@vantly.tech"
                className="mt-3 flex items-center gap-2 text-[0.9375rem] text-[#475069] transition-colors duration-300 hover:text-blue-700"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@vantly.tech
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

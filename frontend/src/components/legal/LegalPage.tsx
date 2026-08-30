import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/sections';

const legalNav = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
];

interface LegalLayoutProps {
  /** Name of the current page, used to skip it in the cross-links. */
  current: string;
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalLayout({
  current,
  title,
  description,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={description} />

      <section className="section-tight" aria-label={`${title} content`}>
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-[#98a1b3]">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-8 divide-y divide-[#eef1f7]">{children}</div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#eef1f7] pt-6">
              <span className="text-[0.8125rem] font-medium text-[#0b1220]">Related:</span>
              {legalNav
                .filter((link) => link.name !== current)
                .map((link, index) => (
                  <span key={link.href} className="flex items-center gap-4">
                    {index > 0 && <span className="text-[#c3cbd9]" aria-hidden="true">·</span>}
                    <Link
                      href={link.href}
                      className="text-[0.8125rem] text-[#475069] transition-colors duration-300 hover:text-blue-700"
                    >
                      {link.name}
                    </Link>
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-9" aria-labelledby={`${title}-heading`}>
      <h2
        id={`${title}-heading`}
        className="text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]"
      >
        {title}
      </h2>
      <div className="mt-3 max-w-none space-y-3">{children}</div>
    </section>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="text-body leading-relaxed text-[#475069]">{children}</p>;
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-body leading-relaxed text-[#475069]" role="list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

/** Visually marks text that needs the site owner's confirmation before launch. */
export function LegalFlag({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-[0.875rem] leading-relaxed text-amber-800">
      <span className="font-semibold text-amber-900">Note for confirmation: </span>
      {children}
    </p>
  );
}
import { cn } from '@/lib/utils';
import { SectionIntro } from './SectionIntro';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

const rows = [
  {
    label: 'Where you show up',
    seo: 'A list of ten blue links',
    geo: 'Inside the answer itself',
    icon: 'M9 20l-5.4 2.8 1-6L.2 12.6l6-.9L9 6.2l2.7 5.5 6 .9-4.3 4.2 1 6z',
  },
  {
    label: 'What wins',
    seo: 'Keywords, links, domain authority',
    geo: 'Entities, structure, citability',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    label: 'How people behave',
    seo: 'Click through, compare, decide',
    geo: 'Ask once, act on one answer',
    icon: 'M17 20h5v-2a3 3 0 00-5.4-1.8M17 20H7m10 0v-2c0-.7-.1-1.3-.4-1.8M7 20H2v-2a3 3 0 015.4-1.8M7 20v-2c0-.7.1-1.3.4-1.8m0 0a5 5 0 019.2 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'What we optimize',
    seo: 'Pages and rankings',
    geo: 'Passages and citations',
    icon: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.4 2.6a2 2 0 112.8 2.8L12 14.5l-4 1 1-4 9.4-8.9z',
  },
];

export function GeoVsSeo({ className }: { className?: string }) {
  return (
    <section className={cn('section', className)} aria-labelledby="geo-seo-heading">
      <div className="shell">
        <SectionIntro
          id="geo-seo-heading"
          eyebrow="GEO vs SEO"
          title={
            <>
              SEO gets you ranked. <span className="text-gradient-brand">GEO gets you quoted.</span>
            </>
          }
          description="They are not rivals. They are two halves of how people find you now — and we run them as one system."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-[#e6eaf2] bg-white shadow-lift">
            {/* Column headers */}
            <div className="hidden sm:grid sm:grid-cols-[1.15fr_1fr_1fr]">
              <div className="hidden border-b border-[#eef1f7] px-6 py-4 sm:block" />

              <div className="flex items-center gap-2.5 border-b border-[#eef1f7] px-5 py-4 sm:border-l sm:px-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f4f9] text-[#5b6478]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.2-4.2m1.7-4.3a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </span>
                <span className="text-[0.9375rem] font-semibold text-[#0b1220]">Classic search</span>
              </div>

              <div className="relative flex items-center gap-2.5 border-b border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/60 px-5 py-4 sm:border-l sm:border-l-blue-100 sm:px-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_8px_18px_-10px_rgba(37,99,235,0.9)]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
                  </svg>
                </span>
                <span className="text-[0.9375rem] font-semibold text-blue-800">AI answers</span>
                <span className="ml-auto hidden rounded-full bg-blue-600 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-white lg:inline-block">
                  Where we focus
                </span>
              </div>
            </div>

            <Stagger step={0.07}>
              {rows.map((row) => (
                <StaggerItem
                  key={row.label}
                  className="group grid grid-cols-1 border-b border-[#eef1f7] last:border-b-0 sm:grid-cols-[1.15fr_1fr_1fr]"
                >
                  <div className="flex items-center gap-3 px-5 pt-5 pb-2 sm:px-6 sm:py-5">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#e6eaf2] bg-[#fbfcfe] text-[#98a1b3] transition-colors duration-500 group-hover:border-blue-200 group-hover:text-blue-600">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={row.icon} />
                      </svg>
                    </span>
                    <span className="text-[0.9375rem] font-medium text-[#0b1220]">{row.label}</span>
                  </div>

                  <div className="px-5 pb-3 text-[0.9375rem] text-[#5b6478] sm:border-l sm:border-[#eef1f7] sm:px-6 sm:py-5">
                    <span className="mr-2 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#b6bece] sm:hidden">
                      Search
                    </span>
                    {row.seo}
                  </div>

                  <div className="border-l-2 border-blue-300 bg-blue-50/50 px-5 py-4 text-[0.9375rem] font-medium text-blue-900 sm:border-l sm:border-l-blue-100 sm:px-6 sm:py-5">
                    <span className="mr-2 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-blue-400 sm:hidden">
                      AI
                    </span>
                    {row.geo}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-center text-[0.9375rem] text-[#7a8399]">
            Most brands need both. Running them separately is how budget gets wasted twice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

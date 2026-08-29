import { Reveal } from '@/components/motion';
import { ReportForm } from '@/components/report';

const assurances = [
  { label: 'Technical SEO check' },
  { label: 'AI / GEO readiness' },
  { label: 'Delivered in 24-48h' },
  { label: 'No obligation' },
];

export function ReportSnapshot() {
  return (
    <section id="report-snapshot" className="section-tight scroll-mt-24" aria-labelledby="report-snapshot-heading">
      <div className="shell">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-blue-700 px-6 py-12 shadow-[0_30px_70px_-24px_rgba(29,78,216,0.5)] lg:px-12 lg:py-14">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900"
              aria-hidden="true"
            />
            <div
              className="animate-float-slow pointer-events-none absolute -top-32 left-1/4 h-80 w-[36rem] rounded-full bg-sky-400/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden="true" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2
                  id="report-snapshot-heading"
                  className="display text-h3 text-pretty text-white lg:text-h2"
                >
                  Where do you stand right now?
                </h2>
                <p className="mt-4 max-w-md text-pretty text-[1.0625rem] leading-relaxed text-blue-100">
                  Get a free SEO &amp; GEO report for your website — no strings attached.
                </p>

                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5" role="list">
                  {assurances.map((item) => (
                    <li key={item.label} className="flex items-center gap-1.5 text-[0.8125rem] text-blue-200">
                      <svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_24px_60px_-20px_rgba(11,18,32,0.35)] sm:p-7">
                <ReportForm variant="inline" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
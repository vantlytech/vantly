import { SectionIntro } from './SectionIntro';
import { Stagger, StaggerItem, Reveal } from '@/components/motion';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceDetailProps {
  capabilitiesEyebrow?: string;
  capabilitiesTitle: string;
  capabilitiesDescription?: string;
  capabilities: string[];
  processTitle: string;
  processDescription?: string;
  process: ProcessStep[];
  stackTitle?: string;
  stack?: string[];
}

/**
 * Shared body for the three service pages: what we cover, how we work,
 * and (optionally) what we build with.
 */
export function ServiceDetail({
  capabilitiesEyebrow = 'Capabilities',
  capabilitiesTitle,
  capabilitiesDescription,
  capabilities,
  processTitle,
  processDescription,
  process,
  stackTitle = 'What we build with',
  stack,
}: ServiceDetailProps) {
  return (
    <>
      <section className="section-tight" aria-labelledby="benefits-heading">
        <div className="shell">
          <SectionIntro
            id="benefits-heading"
            eyebrow={capabilitiesEyebrow}
            title={capabilitiesTitle}
            description={capabilitiesDescription}
          />

          <Stagger
            className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2"
            step={0.06}
          >
            {capabilities.map((capability) => (
              <StaggerItem key={capability}>
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-[#e6eaf2] bg-white px-5 py-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[0.9375rem] font-medium text-[#0b1220]">{capability}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section border-y border-[#eef1f7] bg-soft" aria-labelledby="process-heading">
        <div className="shell">
          <SectionIntro
            id="process-heading"
            eyebrow="How we work"
            title={processTitle}
            description={processDescription}
          />

          <Stagger className="mx-auto mt-14 max-w-3xl space-y-4" step={0.08}>
            {process.map((item) => (
              <StaggerItem key={item.step}>
                <div className="group relative flex flex-col gap-4 rounded-2xl border border-[#e6eaf2] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift sm:flex-row sm:gap-6 sm:p-7">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 font-mono text-[0.6875rem] tracking-[0.1em] text-white shadow-[0_10px_22px_-12px_rgba(37,99,235,0.9)] transition-transform duration-500 group-hover:scale-110">
                    {item.step}
                  </span>

                  <div>
                    <h3 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-[#0b1220]">
                      {item.title}
                    </h3>
                    <p className="text-body mt-2">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {stack && stack.length > 0 && (
        <section className="section-tight" aria-labelledby="stack-heading">
          <div className="shell">
            <SectionIntro id="stack-heading" eyebrow="Tooling" title={stackTitle} />
            <Reveal delay={0.1}>
              <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-full border border-[#e6eaf2] bg-white px-4 py-2 text-[0.875rem] text-[#475069] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-lift"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

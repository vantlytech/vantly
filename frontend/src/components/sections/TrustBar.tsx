import { cn } from '@/lib/utils';
import { Counter, Reveal, Stagger, StaggerItem } from '@/components/motion';

/**
 * Placeholder client wordmarks. Swap these for logos you are actually
 * licensed to display — naming brands you have not worked with is a
 * false endorsement, so these stay generic until you supply real ones.
 */
const clients = ['Northwind', 'Lumen', 'Vertex', 'Kestrel'];

const stats = [
  { value: 500, suffix: '+', label: 'Projects delivered' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: 1, prefix: 'Top ', suffix: '%', label: 'SEO performance' },
  { value: 24, suffix: '/7', label: 'Support & growth' },
];

export function TrustBar({ className }: { className?: string }) {
  return (
    <section className={cn('relative', className)} aria-label="Trust and results">
      <div className="shell">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-[#e6eaf2] bg-white px-6 py-7 shadow-lift lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10 lg:px-8">
            {/* Clients */}
            <div className="lg:max-w-sm lg:border-r lg:border-[#eef1f7] lg:pr-10">
              <p className="text-[0.75rem] font-semibold text-[#0b1220]">
                Trusted by growing teams
              </p>
              <p className="mt-0.5 text-[0.6875rem] text-[#98a1b3]">Worldwide, remote-first</p>

              <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="text-[0.8125rem] font-semibold tracking-[-0.02em] text-[#b6bece] transition-colors duration-300 hover:text-[#5b6478]"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Numbers */}
            <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4" step={0.09}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center lg:text-left">
                    <div className="display text-[1.75rem] text-blue-700 sm:text-[2rem]">
                      <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-[0.8125rem] text-[#5b6478]">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

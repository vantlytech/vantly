import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion';
import { WaveBackground } from '@/components/background';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  /** Decorative backdrop. Defaults to the blue aurora + grid. */
  background?: 'aurora' | 'dune';
}

export function PageHeader({ eyebrow, title, description, className, background = 'aurora' }: PageHeaderProps) {
  return (
    <header
      className={cn('relative overflow-hidden pt-16 pb-8 lg:pt-24 lg:pb-12', className)}
      aria-labelledby="page-title"
    >
      {background === 'dune' ? (
        <WaveBackground />
      ) : (
        <>
          <div className="aurora" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />
        </>
      )}

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal distance={0.5}>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.08}>
            <h1
              id="page-title"
              className={cn('display text-h1 text-balance', eyebrow && 'mt-5')}
            >
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.16}>
              <p className="text-lede mx-auto mt-5 max-w-xl text-pretty">{description}</p>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}

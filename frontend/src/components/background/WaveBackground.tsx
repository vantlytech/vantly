import { cn } from '@/lib/utils';

interface WaveBackgroundProps {
  className?: string;
  /**
   * Fine fabric-grain intensity (0–1). Higher = grainier and more visible.
   * Keep low; this sits behind content. Default 0.45.
   */
  grain?: number;
  /** Fade the top/bottom edges so the texture blends into neighbours. Default true. */
  fade?: boolean;
  /** Unique id prefix for the SVG filter — pass a distinct value if you render two on one page. */
  id?: string;
}

/**
 * Soft, monochrome "silk fold / sand dune" section background.
 * Wraps itself in an absolutely-positioned layer; give the section `relative`.
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <WaveBackground />
 *     <div className="shell relative">…content…</div>
 *   </section>
 *
 * The SVG feTurbulence grain is generated procedurally across the element so it
 * never tiles or pixelates at any screen size. The whole thing is low-contrast
 * (white → very light gray) so cards and text stay readable on top.
 */
export function WaveBackground({ className, grain = 0.6, fade = true, id = 'dune-silk' }: WaveBackgroundProps) {
  const noiseId = id + '-noise';

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {/* Broad flowing light/shadow bands */}
      <div className="dune-bands dune-bands-cover" />

      {/* Faint fractal fabric grain — procedural, resolution-independent */}
      <svg
        className={cn('absolute inset-0 h-full w-full', fade && 'dune-fade')}
        style={{ opacity: grain }}
        preserveAspectRatio="none"
        role="presentation"
      >
        <filter id={noiseId}>
          {/* x-frequency low, y-frequency higher → noise is stretched horizontally,
              which reads as brushed silk / wind-blown sand ridges */}
          <feTurbulence type="fractalNoise" baseFrequency="0.0032 0.026" numOctaves="4" seed="7" />
          {/* Keep RGB near-white; only let alpha undulate so the grain is soft light/shadow */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.93  0 0 0 0 0.93  0 0 0 0 0.93  1.6 1.6 1.6 0 -1.05"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
      </svg>
    </div>
  );
}
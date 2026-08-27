import fs from 'fs';
import path from 'path';
import { cn } from '@/lib/utils';

/**
 * Logos live in `public/logos/<slug>.svg` — official marks taken from the
 * MIT-licensed @lobehub/icons-static-svg set. Replacing a file swaps the logo
 * with no code change; if one is missing we fall back to a lettermark in the
 * brand's colour rather than drawing an imitation of someone's trademark.
 */
const engines = [
  { name: 'ChatGPT', slug: 'chatgpt', color: '#10a37f' },
  { name: 'Perplexity', slug: 'perplexity', color: '#20808d' },
  { name: 'Google AI Overviews', slug: 'google-ai-overviews', color: '#4285f4' },
  { name: 'Claude', slug: 'claude', color: '#d97757' },
  { name: 'Gemini', slug: 'gemini', color: '#1a73e8' },
  { name: 'Copilot', slug: 'copilot', color: '#0078d4' },
  { name: 'Grok', slug: 'grok', color: '#0b1220' },
  { name: 'Google Search', slug: 'google-search', color: '#ea4335' },
];

const LOGO_DIR = path.join(process.cwd(), 'public/logos');

/** Resolved once at build time — a missing file simply falls back. */
function logoSrc(slug: string): string | null {
  for (const ext of ['svg', 'png']) {
    try {
      if (fs.existsSync(path.join(LOGO_DIR, `${slug}.${ext}`))) return `/logos/${slug}.${ext}`;
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * A quiet band naming the surfaces we optimize for. Two identical copies
 * scroll as one so the -50% loop never shows a seam.
 */
export function EngineMarquee({ className }: { className?: string }) {
  const items = engines.map((engine) => ({ ...engine, src: logoSrc(engine.slug) }));

  return (
    <section
      className={cn('border-y border-[#eef1f7] bg-[#fbfcfe] py-10', className)}
      aria-label="Engines we optimize for"
    >
      <div className="shell">
        <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[#98a1b3]">
          Built to win the surfaces people actually ask
        </p>
      </div>

      <div className="marquee-mask relative mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-3 pr-3" aria-hidden={copy === 1}>
              {items.map((engine) => (
                <span
                  key={`${copy}-${engine.slug}`}
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#e6eaf2] bg-white py-2 pl-2 pr-4 text-[0.875rem] font-medium tracking-[-0.01em] text-[#5b6478] shadow-sm transition-colors duration-300 hover:border-blue-200 hover:text-[#0b1220]"
                >
                  {engine.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={engine.src}
                      alt=""
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] shrink-0 object-contain"
                    />
                  ) : (
                    <span
                      className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md text-[0.6875rem] font-bold text-white"
                      style={{ backgroundColor: engine.color }}
                    >
                      {engine.name.charAt(0)}
                    </span>
                  )}
                  {engine.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

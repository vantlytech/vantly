/**
 * Canonical origin for the site.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — explicit override (set this in Vercel).
 *  2. Production fallback — so a missing env var never leaks `localhost`
 *     into robots.txt, sitemap.xml or canonical/OG tags.
 *  3. Localhost for local development.
 */
const PRODUCTION_URL = 'https://www.vantly.tech';

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  if (process.env.NODE_ENV === 'production') return PRODUCTION_URL;

  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();

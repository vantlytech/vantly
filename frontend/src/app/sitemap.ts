import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/services/geo',
    '/services/seo',
    '/services/web-dev',
    '/pricing',
    '/about',
    '/blog',
    '/contact',
    '/case-studies',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticUrls];
}
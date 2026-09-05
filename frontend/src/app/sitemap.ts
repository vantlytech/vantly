import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getBlogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.8 },
    { path: '/services/geo', priority: 0.8 },
    { path: '/services/seo', priority: 0.8 },
    { path: '/services/web-dev', priority: 0.8 },
    { path: '/pricing', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/blog', priority: 0.7 },
    { path: '/case-studies', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
    { path: '/cookies', priority: 0.3 },
  ];

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }));

  const blogPosts: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...blogPosts];
}
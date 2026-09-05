import type { Metadata } from 'next';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  article?: {
    publishedTime: string;
    authors?: string[];
    tags?: string[];
  };
}

export function createPageMetadata({ title, description, path, article }: PageMetadataOptions): Metadata {
  const canonical = path.startsWith('/') ? path : `/${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      ...(article
        ? {
            type: 'article' as const,
            publishedTime: article.publishedTime,
            authors: article.authors,
            tags: article.tags,
          }
        : {}),
    },
  };
}
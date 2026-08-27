import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { PageHeader } from '@/components/sections';
import { Stagger, StaggerItem } from '@/components/motion';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
}

function getBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      const slug = file.replace('.mdx', '');
      return { slug, ...data } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on GEO, SEO, website development, and digital growth strategies from the Vantly team.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Insights & strategy"
        description="Deep dives into GEO, SEO, web performance, and digital growth."
      />

      <section className="section-tight" aria-labelledby="posts-heading">
        <div className="shell">
          <h2 id="posts-heading" className="sr-only">
            All posts
          </h2>

          {posts.length > 0 ? (
            <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3" step={0.09}>
              {posts.map((post) => (
                <StaggerItem key={post.slug} as="article" className="h-full">
                  <Link href={`/blog/${post.slug}`} className="card card-hover group flex h-full flex-col p-7">
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[0.6875rem] font-medium tracking-[0.04em] text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-5 text-[1.1875rem] font-semibold leading-snug tracking-[-0.02em] text-[#0b1220] transition-colors duration-300 group-hover:text-blue-700">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-body text-[#5b6478]">
                      {post.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-7 text-[0.8125rem] text-[#98a1b3]">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="inline-flex items-center gap-1.5 font-medium text-blue-600">
                        Read
                        <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="rounded-2xl border border-[#e6eaf2] bg-white py-20 text-center">
              <p className="text-[0.9375rem] text-[#7a8399]">No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PageHeader } from '@/components/sections';
import { cn } from '@/lib/utils';

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
        title="Insights & Strategy"
        description="Deep dives into GEO, SEO, web performance, and digital growth."
      />

      <section className="py-20 lg:py-32 bg-black" aria-labelledby="posts-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className={cn('glass rounded-2xl overflow-hidden hover:shadow-2xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300')}
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium glass text-blue-400 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    <a href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Hero } from '@/components/sections';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function getPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: mdxContent } = matter(content);
  return { slug, frontmatter: data, content: mdxContent };
}

function getAllSlugs() {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className="text-4xl font-bold text-gray-900 dark:text-white mt-10 mb-6 first:mt-0" />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-3" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="list-decimal list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300" />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400" />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className="bg-gray-950 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6" />
  ),
  blockquote: (props: React.QuoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className="border-l-4 border-blue-500 pl-6 italic text-gray-600 dark:text-gray-400 my-6" />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table {...props} className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800" />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700" />
  ),
  hr: () => <hr className="border-gray-200 dark:border-gray-700 my-12" />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <>
      <Hero
        title={frontmatter.title}
        description={frontmatter.description}
        className="py-16 lg:py-24"
      />

      <article className="py-20 lg:py-32 bg-white dark:bg-gray-950" itemScope itemType="https://schema.org/BlogPosting">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                By <span itemProp="name">{frontmatter.author}</span>
              </span>
              <time itemProp="datePublished" dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
          </header>

          <div
            itemProp="articleBody"
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <MDXRemote source={content} components={components} />
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enjoyed this article? <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">Read more on our blog</a> or{' '}
              <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">get in touch</a> to discuss your project.
            </p>
          </footer>
        </div>
      </article>
    </>
  );
}
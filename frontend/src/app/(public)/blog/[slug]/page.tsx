import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

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
    <h1 {...props} className="heading text-h2 mt-12 mb-6 first:mt-0" />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="heading mt-14 mb-5 text-[1.75rem]" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="mt-10 mb-3 text-[1.25rem] font-semibold tracking-[-0.02em] text-[#0b1220]" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mb-6 text-[1.0625rem] leading-[1.75] text-[#3f485c]" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="mb-6 list-disc space-y-2.5 pl-5 text-[1.0625rem] leading-relaxed text-[#3f485c] marker:text-blue-400" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="mb-6 list-decimal space-y-2.5 pl-5 text-[1.0625rem] leading-relaxed text-[#3f485c] marker:text-[#98a1b3]" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li {...props} className="pl-1.5" />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="font-medium text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-400" />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="font-semibold text-[#0b1220]" />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="rounded-md border border-[#e6eaf2] bg-[#f8fafd] px-1.5 py-0.5 font-mono text-[0.875em] text-blue-700" />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className="mb-6 overflow-x-auto rounded-2xl border border-[#e6eaf2] bg-[#f8fafd] p-5 text-[0.875rem] leading-relaxed" />
  ),
  blockquote: (props: React.QuoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className="my-8 rounded-r-xl border-l-2 border-blue-500 bg-blue-50/50 py-4 pl-6 pr-4 text-[1.0625rem] leading-relaxed text-[#3f485c]" />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mb-6 overflow-x-auto rounded-2xl border border-[#e6eaf2]">
      <table {...props} className="min-w-full" />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} className="border-b border-[#e6eaf2] bg-[#f8fafd] px-4 py-3 text-left text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#98a1b3]" />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className="border-b border-[#eef1f7] px-4 py-3 text-[0.9375rem] text-[#3f485c]" />
  ),
  hr: () => <hr className="my-12 h-px border-0 bg-[#e6eaf2]" />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <article
      className="relative overflow-hidden pt-16 pb-24 lg:pt-20 lg:pb-32"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <div className="aurora" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-2xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-[#7a8399] transition-colors duration-300 hover:text-blue-700"
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          All posts
        </Link>

        <header className="mt-8 border-b border-[#e6eaf2] pb-10">
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[0.6875rem] font-medium tracking-[0.04em] text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 itemProp="headline" className="display text-h2 mt-6 text-balance">
            {frontmatter.title}
          </h1>

          {frontmatter.description && (
            <p className="text-lede mt-5 text-pretty">{frontmatter.description}</p>
          )}

          <div className="mt-7 flex items-center gap-3 text-[0.8125rem] text-[#98a1b3]">
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{frontmatter.author}</span>
            </span>
            <span aria-hidden="true">·</span>
            <time itemProp="datePublished" dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div itemProp="articleBody" className="mt-12">
          <MDXRemote source={content} components={components} />
        </div>

        <footer className="mt-16 rounded-2xl border border-[#e6eaf2] bg-[#f8fafd] p-7">
          <p className="text-body text-[#5b6478]">
            Enjoyed this?{' '}
            <Link
              href="/blog"
              className="font-medium text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-800"
            >
              Read more on the blog
            </Link>{' '}
            or{' '}
            <Link
              href="/contact"
              className="font-medium text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-800"
            >
              get in touch
            </Link>{' '}
            about your project.
          </p>
        </footer>
      </div>
    </article>
  );
}

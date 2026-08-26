import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Vantly | GEO, SEO & Website Development Agency',
    template: '%s | Vantly',
  },
  description: 'We help businesses grow through Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and custom website development. Get found, get chosen, grow faster.',
  keywords: ['GEO', 'Generative Engine Optimization', 'SEO', 'Search Engine Optimization', 'Website Development', 'Digital Marketing Agency'],
  authors: [{ name: 'Vantly' }],
  creator: 'Vantly',
  publisher: 'Vantly',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Vantly',
    title: 'Vantly | GEO, SEO & Website Development Agency',
    description: 'We help businesses grow through Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and custom website development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vantly Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantly | GEO, SEO & Website Development Agency',
    description: 'We help businesses grow through Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and custom website development.',
    images: ['/og-image.png'],
    creator: '@vantly',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import { ChatWidget } from '@/components/chatbot/ChatWidget';
import { SITE_URL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantly | GEO, SEO & Website Development Agency',
    description: 'We help businesses grow through Generative Engine Optimization (GEO), Search Engine Optimization (SEO), and custom website development.',
    creator: '@vantly',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-icon.png',
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
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
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white text-[#0b1220]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

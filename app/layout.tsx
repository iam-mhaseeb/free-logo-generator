import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Logo Generator | Create Custom Logos Instantly',
  description: 'Create professional logos in minutes with our free online logo maker. Choose from 1000+ icons, customize colors, and download in high quality. Perfect for businesses, startups, and personal branding.',
  keywords: 'logo maker, logo generator, free logo creator, custom logo design, business logo, brand logo, logo editor, online logo maker, professional logo design, free logo maker',
  openGraph: {
    title: 'Free Logo Generator | Create Custom Logos Instantly',
    description: 'Create professional logos in minutes with our free online logo maker. Choose from 1000+ icons, customize colors, and download in high quality.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Logo Generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Logo Generator | Create Custom Logos Instantly',
    description: 'Create professional logos in minutes with our free online logo maker. Perfect for businesses and personal branding.',
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
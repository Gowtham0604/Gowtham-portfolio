import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Gowtham S | Forward Deployed Engineer & Full-Stack Developer',
  description:
    'Portfolio of Gowtham S — Forward Deployed Engineer, AI Engineer, and Full-Stack Developer based in Bengaluru. Experienced in building production backend systems, AI-driven tooling, and scalable cloud architectures.',
  keywords: [
    'Gowtham S',
    'Forward Deployed Engineer',
    'AI Engineer',
    'Full-Stack Developer',
    'Backend Engineer',
    'Bengaluru',
    'Python',
    'Next.js',
    'AWS',
    'SupaCam',
    'Valzy',
  ],
  authors: [{ name: 'Gowtham S', url: 'https://github.com/Gowtham0604' }],
  creator: 'Gowtham S',
  openGraph: {
    title: 'Gowtham S | Forward Deployed Engineer & Full-Stack Developer',
    description:
      'Explore projects, production systems, and engineering work by Gowtham S. Specializing in Python, Cloud, AI pipelines, and distributed backends.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f7' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background dark:bg-[#000000] text-foreground font-sans antialiased selection:bg-[#2997ff]/25 selection:text-[#2997ff]">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

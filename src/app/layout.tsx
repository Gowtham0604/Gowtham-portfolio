import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

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
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-500">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

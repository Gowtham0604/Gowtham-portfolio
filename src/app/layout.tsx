import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Gowtham S | Data & Backend Engineer',
  description:
    'Portfolio of Gowtham S — Data & Backend Engineer specializing in Python, SQL, PostgreSQL, distributed data pipelines, and AWS cloud systems. Experienced in production systems and independently shipped live products.',
  keywords: [
    'Gowtham S',
    'Data & Backend Engineer',
    'Data Engineer',
    'Backend Engineer',
    'Bengaluru',
    'Python',
    'SQL',
    'PostgreSQL',
    'Data Pipelines',
    'ETL Pipelines',
    'AWS',
    'SupaCam',
    'Valzy',
    'SideHustlesJob',
    'RCBTeam',
  ],
  authors: [{ name: 'Gowtham S', url: 'https://github.com/Gowtham0604' }],
  creator: 'Gowtham S',
  openGraph: {
    title: 'Gowtham S | Data & Backend Engineer',
    description:
      'Explore data pipelines, PostgreSQL architectures, and production backend projects by Gowtham S. Specializing in Python, SQL, AWS, and distributed systems.',
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

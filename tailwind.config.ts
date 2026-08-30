import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        apple: {
          blue: '#2997ff',
          'blue-dark': '#0071e3',
          black: '#000000',
          dark: '#0a0a0c',
          card: '#161617',
          gray: '#86868b',
          light: '#f5f5f7',
          subtext: '#a1a1a6',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        apple: '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
        'apple-lg': '0 12px 32px -4px rgba(0, 0, 0, 0.35)',
        'apple-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        glow: '0 0 40px -5px rgba(41, 151, 255, 0.3)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '-0.011em',
      },
    },
  },
  plugins: [],
};

export default config;

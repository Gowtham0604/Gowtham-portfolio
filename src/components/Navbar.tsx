'use client';

import * as React from 'react';
import Link from 'next/link';
import { navigationLinks, personalInfo } from '@/data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, FileDown, Terminal } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#"
          className="group flex items-center gap-2 text-foreground font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-base font-bold">
            {personalInfo.name}
            <span className="text-emerald-500 font-black">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 bg-card/60 backdrop-blur-sm border border-border/80 px-4 py-1.5 rounded-full shadow-sm">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-1 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href={personalInfo.resumeUrl}
              download="Gowtham_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 transition-all shadow-sm hover:shadow-glow"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Action buttons */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg border border-border bg-card/80 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-emerald-500 py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Resume PDF</span>
              <a
                href={personalInfo.resumeUrl}
                download="Gowtham_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-emerald-500 text-white dark:text-slate-950 hover:bg-emerald-600 transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

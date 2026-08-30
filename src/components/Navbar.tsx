'use client';

import * as React from 'react';
import Link from 'next/link';
import { navigationLinks, personalInfo } from '@/data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
          ? 'bg-background/80 dark:bg-[#000000]/75 backdrop-blur-2xl border-b border-border/80 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.05)] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#"
          className="group flex items-center gap-2 text-foreground font-semibold text-sm tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="font-semibold text-base tracking-tight">
            {personalInfo.name}
          </span>
          <span className="text-[11px] font-normal text-muted-foreground hidden sm:inline tracking-normal">
            &middot; Portfolio
          </span>
        </Link>

        {/* Desktop Navigation - Apple style slim text links */}
        <nav className="hidden md:flex items-center gap-7">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-3 pl-3 border-l border-border dark:border-white/[0.08]">
            <ThemeToggle />

            <a
              href={personalInfo.resumeUrl}
              download="Gowtham_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-1 text-xs font-medium rounded-full bg-[#0071e3] dark:bg-[#2997ff] text-white dark:text-black hover:opacity-90 transition-opacity"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </nav>

        {/* Mobile Action buttons */}
        <div className="flex md:hidden items-center gap-2.5">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-full bg-muted/60 dark:bg-white/[0.08] text-foreground"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 dark:bg-[#161617]/95 backdrop-blur-2xl border-b border-border dark:border-white/[0.08] px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-[#2997ff] py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border dark:border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Download Resume</span>
              <a
                href={personalInfo.resumeUrl}
                download="Gowtham_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full bg-[#0071e3] dark:bg-[#2997ff] text-white dark:text-black"
              >
                <span>Resume PDF</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

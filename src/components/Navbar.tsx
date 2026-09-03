'use client';

import * as React from 'react';
import Link from 'next/link';
import { navigationLinks, personalInfo } from '@/data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pointer-events-none">
      <div className="max-w-5xl xl:max-w-6xl mx-auto bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-full px-6 sm:px-8 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 shadow-sm">
        {/* Brand */}
        <Link
          href="#"
          className="group flex items-center gap-2 text-foreground font-semibold text-sm tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="font-semibold text-sm sm:text-base tracking-tight">
            {personalInfo.name}
          </span>
          <span className="text-[11px] font-normal text-[#86868b] hidden sm:inline">
            &middot; Portfolio
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-[#86868b] hover:text-foreground transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={personalInfo.resumeUrl}
            download="Gowtham_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background hover:opacity-90 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full cursor-pointer"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-foreground transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-3xl p-6 pointer-events-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-3.5">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-[#2997ff] py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border dark:border-white/[0.1] flex items-center justify-between">
              <span className="text-xs text-[#86868b]">Download Resume</span>
              <a
                href={personalInfo.resumeUrl}
                download="Gowtham_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-foreground text-background hover:opacity-90 inline-flex items-center gap-1 px-3.5 py-1 text-xs font-medium rounded-full"
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

'use client';

import * as React from 'react';
import { personalInfo } from '@/data/portfolio';
import { ArrowUp, Heart, Terminal } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/60 bg-card/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono font-bold text-sm text-foreground">
                {personalInfo.name}
              </span>
            </div>

            <div className="hidden sm:block text-border">&bull;</div>

            {/* Live uptime indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for hire &middot; Bengaluru & Remote</span>
            </div>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex items-center gap-6">
            <p className="text-xs font-mono text-muted-foreground">
              &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

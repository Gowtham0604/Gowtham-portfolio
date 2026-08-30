'use client';

import * as React from 'react';
import { personalInfo } from '@/data/portfolio';
import { ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border dark:border-white/[0.06] py-12 bg-background dark:bg-[#000000]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
          {/* Left: Copyright */}
          <div>
            Copyright &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          {/* Right: Quick actions */}
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]"></span>
              <span>Available for hire</span>
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

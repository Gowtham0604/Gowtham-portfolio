'use client';

import * as React from 'react';
import { certifications } from '@/data/portfolio';
import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
            Verification
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Certifications.
          </h2>
        </div>

        {/* Apple Credentials Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none hover:border-black/[0.15] dark:hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 dark:bg-[#2997ff]/15 flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] mb-5">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] mb-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{cert.badgeText || 'Verified'}</span>
                </div>
                <h3 className="font-bold text-foreground text-lg tracking-tight">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-6 mt-6 border-t border-border dark:border-white/[0.08] text-xs text-[#86868b]">
                Issued by {cert.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

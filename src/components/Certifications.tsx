'use client';

import * as React from 'react';
import { certifications } from '@/data/portfolio';
import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
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
              className="py-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#0071e3]/10 dark:bg-[#2997ff]/15 flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] mb-5 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] mb-1.5">
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

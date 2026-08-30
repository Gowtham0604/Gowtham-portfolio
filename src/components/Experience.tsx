'use client';

import * as React from 'react';
import { experiences } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
            Career
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Experience.
          </h2>
        </div>

        {/* Apple Milestone Card */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 sm:p-10 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none hover:border-black/[0.15] dark:hover:border-white/[0.2] transition-all duration-300"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-border dark:border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0071e3]/10 dark:bg-[#2997ff]/15 text-[#0071e3] dark:text-[#2997ff]">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-[#86868b] mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end text-xs text-[#86868b] gap-2 sm:gap-1">
                  <span>{exp.period}</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="py-6 space-y-3.5">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#515154] dark:text-[#a1a1a6] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] dark:bg-[#2997ff] mt-2.5 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Apple-style Tech Chips */}
              <div className="pt-6 border-t border-border dark:border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-[#86868b] mr-2">
                  Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

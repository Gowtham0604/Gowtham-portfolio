'use client';

import * as React from 'react';
import { experiences } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500" />
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-mono font-semibold">
            02. Work History
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Professional Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-sm sm:text-base">
          Hands-on production engineering in high-iteration environments, delivering reliable backends and client-focused systems.
        </p>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-background border-2 border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500 transition-all duration-300 shadow-glow" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 transition-all">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-border/60">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-base font-medium text-emerald-500 dark:text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-muted-foreground gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono uppercase text-muted-foreground tracking-wider mr-2">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted text-foreground border border-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

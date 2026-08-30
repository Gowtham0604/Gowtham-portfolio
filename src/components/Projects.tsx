'use client';

import * as React from 'react';
import { projects } from '@/data/portfolio';
import { ArrowUpRight, Github, Check } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Projects.
            </h2>
          </div>
          <a
            href="https://github.com/Gowtham0604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline underline-offset-4"
          >
            <span>All repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Apple Glass Bento Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="py-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 px-3.5 py-1 rounded-full text-xs font-medium text-[#86868b]">
                    {project.category}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-white/[0.14] text-foreground transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Big Display Title */}
                <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-[#86868b] mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#515154] dark:text-[#a1a1a6] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Apple Specs Glass Sub-card */}
                <div className="space-y-2.5 mb-8 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] backdrop-blur-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
                    Key Architecture:
                  </span>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#515154] dark:text-[#a1a1a6]">
                      <Check className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Glass Tech Chips */}
              <div className="pt-4 border-t border-border dark:border-white/[0.08] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 px-3.5 py-1 rounded-full text-xs font-medium text-foreground"
                  >
                    {tag}
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

'use client';

import * as React from 'react';
import { projects } from '@/data/portfolio';
import { ArrowUpRight, Github, Check, ExternalLink, Globe } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Projects.
            </h2>
            <p className="text-sm sm:text-base text-[#86868b] mt-2 max-w-2xl">
              Production data pipelines, real-time video streaming, and independently deployed live platforms.
            </p>
          </div>
          <a
            href="https://github.com/Gowtham0604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline underline-offset-4 shrink-0"
          >
            <span>All repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2x2 Bento Project Showcase for all 4 projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="py-8 px-6 sm:px-8 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-border dark:border-white/[0.08] flex flex-col justify-between group transition-all duration-300 hover:border-[#2997ff]/40 hover:shadow-[0_0_30px_rgba(41,151,255,0.06)]"
            >
              <div>
                {/* Header row: category / badge & links */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.badge ? (
                      <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{project.badge}</span>
                      </span>
                    ) : (
                      <span className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-xs font-medium text-[#86868b]">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Action links: GitHub and Live URL */}
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        title="View Source on GitHub"
                        className="p-2 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-foreground transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live website for ${project.title}`}
                        title="Visit Live Product"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/15 border border-[#0071e3]/20 dark:border-[#2997ff]/30 text-[#0071e3] dark:text-[#2997ff] text-xs font-medium hover:bg-[#0071e3]/20 dark:hover:bg-[#2997ff]/25 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Display Title & Subtitle */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#86868b] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* One-sentence Description */}
                <p className="text-sm text-[#515154] dark:text-[#a1a1a6] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Engineering Highlights / Architecture */}
                <div className="space-y-2.5 mb-8 p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
                    Engineering Highlights:
                  </span>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#515154] dark:text-[#a1a1a6] leading-relaxed">
                      <Check className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Tech Stack Chips */}
              <div className="pt-4 border-t border-border dark:border-white/[0.08] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-xs font-medium text-foreground"
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

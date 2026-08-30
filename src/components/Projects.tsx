'use client';

import * as React from 'react';
import { projects } from '@/data/portfolio';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
} from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500" />
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-mono font-semibold">
            03. Featured Work
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Production & System Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base">
              Engineered for reliability, low-latency streaming, and high-volume data processing.
            </p>
          </div>
          <a
            href="https://github.com/Gowtham0604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-500 hover:text-emerald-400 underline-offset-4 hover:underline"
          >
            <span>Explore all repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/50 hover:shadow-glow transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                      {project.category.includes('AI') ? (
                        <Activity className="w-5 h-5" />
                      ) : (
                        <Layers className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="p-2 rounded-lg border border-border bg-muted/50 hover:bg-muted text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architectural Highlights */}
                <div className="mb-6 space-y-2.5 bg-muted/40 p-4 rounded-xl border border-border/60">
                  <span className="text-xs font-mono font-semibold uppercase text-foreground/80 tracking-wider block mb-2">
                    Key Technical Highlights:
                  </span>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-4 border-t border-border/50 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20"
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

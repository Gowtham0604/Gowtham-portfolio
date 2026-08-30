'use client';

import * as React from 'react';
import { skillCategories } from '@/data/portfolio';
import {
  Code2,
  Server,
  Cloud,
  Database,
  BrainCircuit,
  Wrench,
} from 'lucide-react';

export function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code2 className="w-5 h-5 text-emerald-500" />;
      case 'Backend & APIs':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-5 h-5 text-emerald-500" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'AI & LLM Tooling':
        return <BrainCircuit className="w-5 h-5 text-emerald-500" />;
      case 'Developer Tools':
      default:
        return <Wrench className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500" />
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-mono font-semibold">
            04. Technical Capabilities
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-sm sm:text-base">
          A targeted toolchain focused on backend robustness, cloud scalability, modern APIs, and high-velocity AI workflows.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-foreground text-lg group-hover:text-emerald-500 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg border border-border/90 bg-muted/60 hover:bg-muted text-foreground text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{skill.name}</span>
                    </div>
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

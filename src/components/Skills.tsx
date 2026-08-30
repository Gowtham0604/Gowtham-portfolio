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
        return <Code2 className="w-5 h-5 text-[#2997ff]" />;
      case 'Backend & APIs':
        return <Server className="w-5 h-5 text-[#30d158]" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-5 h-5 text-[#bf5af2]" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-[#ff9f0a]" />;
      case 'AI & LLM Tooling':
        return <BrainCircuit className="w-5 h-5 text-[#64d2ff]" />;
      case 'Developer Tools':
      default:
        return <Wrench className="w-5 h-5 text-[#ff453a]" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
            Toolchain
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Skills &amp; Technologies.
          </h2>
        </div>

        {/* Glass Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 apple-glass-card flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center shadow-sm">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-foreground text-base">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="badge-glass px-3.5 py-1.5 rounded-full text-xs font-medium text-foreground hover:bg-white/[0.14] transition-colors"
                    >
                      {skill.name}
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

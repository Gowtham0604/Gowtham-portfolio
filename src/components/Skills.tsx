'use client';

import * as React from 'react';
import { skillCategories } from '@/data/portfolio';
import {
  Code2,
  Cloud,
  Database,
  Server,
  Wrench,
} from 'lucide-react';

export function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code2 className="w-5 h-5 text-[#2997ff]" />;
      case 'Data & Databases':
        return <Database className="w-5 h-5 text-[#ff9f0a]" />;
      case 'Backend & Architecture':
        return <Server className="w-5 h-5 text-[#30d158]" />;
      case 'Cloud, DevOps & Tools':
      case 'Cloud & Tools':
        return <Cloud className="w-5 h-5 text-[#bf5af2]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#ff453a]" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Skills &amp; Technologies.
          </h2>
          <p className="text-sm sm:text-base text-[#86868b] mt-2 max-w-2xl">
            Targeted for Data Engineering, Backend Systems, Python/SQL optimization, and Cloud Pipelines.
          </p>
        </div>

        {/* Glass Bento Grid (2x2 Balanced Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="py-6 px-6 sm:px-8 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-border dark:border-white/[0.08] flex flex-col justify-between"
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
                      className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-foreground hover:bg-[#2997ff]/10 hover:border-[#2997ff]/40 transition-colors"
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

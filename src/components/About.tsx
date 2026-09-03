'use client';

import * as React from 'react';
import { personalInfo } from '@/data/portfolio';
import {
  GraduationCap,
  Layers,
  Database,
  Cloud,
  Zap,
} from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-[#2997ff]" />,
      title: 'Data & ETL Pipelines',
      description:
        'End-to-end data ingestion, transformation, and storage pipelines in Python moving data reliably into PostgreSQL.',
    },
    {
      icon: <Database className="w-5 h-5 text-[#ff9f0a]" />,
      title: 'Relational Schemas & SQL',
      description:
        'RDBMS design, indexing, and query optimization reducing latency across high-volume production tables.',
    },
    {
      icon: <Cloud className="w-5 h-5 text-[#bf5af2]" />,
      title: 'Cloud & CI/CD Automation',
      description:
        'Automated CI/CD pipelines via GitHub Actions, AWS serverless orchestration (Lambda, EC2, S3), and Docker.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#30d158]" />,
      title: 'Forward Deployed Delivery',
      description:
        'Delivering robust client-facing platforms, data validation & reconciliation, and agile collaboration.',
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
            Overview
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            About Me.
          </h2>
        </div>

        {/* Apple Glass Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Story Card - spans 7 cols */}
          <div className="md:col-span-7 py-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#86868b]">
                Background
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2 mb-6">
                Engineering reliable data pipelines and scalable backend architectures.
              </h3>
              <div className="space-y-4 text-[#515154] dark:text-[#a1a1a6] text-sm sm:text-base leading-relaxed">
                <p>
                  I hold a Bachelor of Engineering in Information Science &amp; Engineering from Malnad College of Engineering (2021–2025, CGPA: 7.74). My core engineering work focuses on Python data pipelines, PostgreSQL schema design, and distributed backend systems.
                </p>
                <p>
                  During my production internship at SupaDev Technologies, I built reliable data ingestion and transformation pipelines in Python, optimized SQL query latency on high-volume tables, and automated release cycles with GitHub Actions CI/CD and AWS.
                </p>
                <p>
                  Beyond professional client-facing systems, I have demonstrated end-to-end product ownership by architecting, self-hosting, and shipping live independent web platforms like <a href="https://sidehustlesjob.com/" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium">SideHustlesJob</a> and <a href="https://rcbteam.in/" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium">RCBTeam</a>.
                </p>
              </div>
            </div>

            {/* Target Role Pills */}
            <div className="pt-8 mt-6 border-t border-border dark:border-white/[0.08]">
              <span className="text-xs font-medium text-[#86868b] block mb-3">
                Focus Areas
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Stats Bento Card - spans 5 cols */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Education Card */}
            <div className="py-8 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#0071e3]/10 dark:bg-[#2997ff]/15 flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] mb-6 shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-[#86868b]">
                  Education
                </span>
                <h4 className="text-lg font-bold text-foreground mt-1">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-sm text-[#86868b] mt-1">
                  {personalInfo.education.institution}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border dark:border-white/[0.08] flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-bold tracking-tight text-foreground">
                    {personalInfo.education.grade.replace('CGPA ', '')}
                  </span>
                  <span className="text-xs text-[#86868b] ml-1 font-medium">CGPA</span>
                </div>
                <span className="text-xs font-medium text-[#86868b]">
                  {personalInfo.education.period}
                </span>
              </div>
            </div>

            {/* Location & Relocation Card */}
            <div className="py-6">
              <span className="text-xs font-medium uppercase tracking-wider text-[#86868b]">
                Current Base
              </span>
              <div className="text-lg font-bold text-foreground mt-1">
                Bengaluru, Karnataka
              </div>
              <p className="text-xs text-[#86868b] mt-1">
                Available for on-site &amp; remote engineering opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars - Glass Bento Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="py-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

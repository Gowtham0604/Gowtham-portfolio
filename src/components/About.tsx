'use client';

import * as React from 'react';
import { personalInfo } from '@/data/portfolio';
import {
  GraduationCap,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-[#2997ff]" />,
      title: 'Backend Systems',
      description:
        'Resilient APIs, microservices, and database models designed for high concurrency and zero-downtime reliability.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#a855f7]" />,
      title: 'Real-Time & AI Tooling',
      description:
        'Computer vision pipelines, WebSocket event streamers, and LLM integrations engineered for practical enterprise speed.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#ec4899]" />,
      title: 'Forward Deployed Agility',
      description:
        'Translating client needs into production software, triaging edge cases, and continuous delivery based on live telemetry.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#30d158]" />,
      title: 'Cloud & Infrastructure',
      description:
        'Automated CI/CD workflows via GitHub Actions, containerized Docker deployments, and serverless AWS orchestration.',
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
            Overview
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            About Me.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Story Card - spans 7 cols */}
          <div className="md:col-span-7 rounded-3xl p-8 sm:p-10 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#86868b]">
                Background
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2 mb-6">
                Taking features from concept to deployment.
              </h3>
              <div className="space-y-4 text-[#515154] dark:text-[#a1a1a6] text-sm sm:text-base leading-relaxed">
                <p>
                  I hold a Bachelor of Engineering in Information Science &amp; Engineering from Malnad College of Engineering (2021–2025). My focus is on writing robust backend systems, architecting event-driven pipelines, and integrating practical AI tooling.
                </p>
                <p>
                  As a Forward Deployed Engineer, I operate at the intersection of technical architecture and client impact — deploying scalable services on AWS, configuring automated CI/CD pipelines, and rapidly iterating on real-world production feedback.
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
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-foreground"
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
            <div className="rounded-3xl p-8 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 dark:bg-[#2997ff]/15 flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] mb-6">
                  <GraduationCap className="w-5 h-5" />
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
            <div className="rounded-3xl p-7 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none">
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

        {/* 4 Pillars - Bento Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none hover:border-black/[0.15] dark:hover:border-white/[0.2] transition-all duration-300"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h4 className="font-semibold text-sm text-foreground mb-1.5">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#86868b] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

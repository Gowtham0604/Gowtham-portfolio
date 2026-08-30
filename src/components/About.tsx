'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import {
  GraduationCap,
  Cpu,
  Layers,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      title: 'Production Backend Engineering',
      description:
        'Architecting resilient APIs, event-driven microservices, and database schemas that withstand scale and operational rigor.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      title: 'AI & Real-Time Tooling',
      description:
        'Building computer vision pipelines, WebSocket event streamers, and integrating LLMs into tangible developer workflows.',
    },
    {
      icon: <Rocket className="w-5 h-5 text-emerald-500" />,
      title: 'Forward Deployed Mindset',
      description:
        'Iterating rapidly on client feedback, triaging production anomalies, and translating product requirements into high-value code.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: 'Cloud Infrastructure & CI/CD',
      description:
        'Automating delivery pipelines with GitHub Actions, containerizing services via Docker, and hosting on AWS serverless and compute.',
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500" />
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-mono font-semibold">
            01. Background & Philosophy
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80">
                {paragraph}
              </p>
            ))}

            {/* Quick bullet highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-foreground/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Concept-to-deployment ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-time streaming & WebSockets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated CI/CD with GitHub Actions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Serverless & AWS cloud deployment</span>
              </div>
            </div>
          </div>

          {/* Education Card & Core Attributes */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Education Highlight */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold">
                    Education
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mt-1">
                    {personalInfo.education.institution}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs font-mono text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-muted border border-border">
                      {personalInfo.education.period}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                      {personalInfo.education.grade}
                    </span>
                    <span>{personalInfo.education.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metric / Role Target Badge */}
            <div className="p-5 rounded-2xl border border-border bg-card/60">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Target Specializations
              </span>
              <div className="flex flex-wrap gap-2 mt-3">
                {personalInfo.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-medium rounded-lg border border-border bg-muted/60 text-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-3">{pillar.icon}</div>
              <h4 className="font-semibold text-foreground text-sm mb-1.5 group-hover:text-emerald-500 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

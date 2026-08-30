'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import {
  ArrowRight,
  FileDown,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Terminal,
  Sparkles,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-sm text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Roles &middot; Forward Deployed / AI / Full-Stack</span>
        </motion.div>

        {/* Name and Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground font-sans mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 mb-6"
        >
          <span>{personalInfo.role}</span>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Building production backend systems and AI-driven tooling. Experienced in taking mission-critical
          features from architectural concept to battle-tested cloud deployment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-sm transition-all shadow-md hover:shadow-glow hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/80 hover:bg-muted text-foreground font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
          >
            <Mail className="w-4 h-4 text-emerald-500" />
            <span>Contact Me</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Gowtham_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Location & Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-border/60 text-xs text-muted-foreground font-mono"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="hidden sm:block text-border">&bull;</div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github/{personalInfo.githubUsername}</span>
          </a>

          <div className="hidden sm:block text-border">&bull;</div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
            <span>linkedin/{personalInfo.linkedinUsername}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

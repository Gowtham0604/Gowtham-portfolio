'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Github,
  Linkedin,
  Mail,
  FileDown,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Apple-style multi-stop ambient specular lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] lg:w-[1200px] h-[450px] bg-gradient-to-b from-[#2997ff]/20 via-[#a855f7]/12 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#0071e3]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center w-full">
        {/* Apple Glass Pill Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium text-[#86868b] mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2997ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2997ff]"></span>
          </span>
          <span className="text-foreground/90 font-medium">
            Available for Roles &middot; Data &amp; Backend &middot; Data Pipelines &middot; Cloud Automation
          </span>
        </motion.div>

        {/* Grand Display Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] text-foreground leading-[1.05] mb-4"
        >
          <span className="text-gradient-titanium">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[#0071e3] dark:text-[#2997ff] mb-6"
        >
          Data &amp; Backend Engineer
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-muted-foreground font-normal leading-relaxed mb-10"
        >
          Engineering robust data pipelines, PostgreSQL architectures, and reliable backend systems in Python. Experienced in automated cloud deployment, schema optimization, and shipping real-world products from concept to live production.
        </motion.p>

        {/* Ultra-Premium Apple Glass Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {/* Primary Blue Glass Pill Button */}
          <a
            href="#projects"
            className="bg-foreground text-background hover:opacity-90 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm cursor-pointer"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Frosted Glass Pill Button */}
          <a
            href="#contact"
            className="bg-black/5 dark:bg-white/10 text-foreground hover:bg-black/10 dark:hover:bg-white/20 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
            <span>Contact Me</span>
          </a>

          {/* Resume Download Pill Button */}
          <a
            href={personalInfo.resumeUrl}
            download="Gowtham_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#2997ff] bg-black/5 dark:bg-white/10 text-foreground hover:bg-[#2997ff]/10 dark:hover:bg-[#2997ff]/15 hover:border-[#60a5fa] inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm cursor-pointer shadow-[0_0_20px_rgba(41,151,255,0.25)] transition-all duration-200"
          >
            <FileDown className="w-4 h-4 text-[#2997ff]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Bottom Specs Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs text-[#86868b]"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
            <span className="text-foreground/80 font-medium">{personalInfo.location}</span>
          </div>

          <div className="hidden sm:block text-border dark:text-white/[0.15]">&bull;</div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{personalInfo.githubUsername}</span>
          </a>

          <div className="hidden sm:block text-border dark:text-white/[0.15]">&bull;</div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
            <span>linkedin.com/in/{personalInfo.linkedinUsername}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

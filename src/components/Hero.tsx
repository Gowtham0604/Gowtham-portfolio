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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-b from-[#2997ff]/20 via-[#a855f7]/12 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#0071e3]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Available for Roles &middot; Forward Deployed &middot; AI &middot; Full-Stack
          </span>
        </motion.div>

        {/* Grand Display Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.04em] text-foreground leading-[1.05] mb-4"
        >
          <span className="text-gradient-titanium">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Apple Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#86868b] mb-6"
        >
          Forward Deployed Engineer. Full-Stack Developer.
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-normal leading-relaxed mb-10"
        >
          Building high-concurrency backend architectures, real-time AI pipelines, and cloud-native systems. Taking mission-critical software from concept to production.
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
            className="bg-black/5 dark:bg-white/10 text-foreground hover:bg-black/10 dark:hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-[#86868b]" />
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

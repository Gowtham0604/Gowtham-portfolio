'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import {
  ArrowRight,
  ChevronRight,
  Download,
  MapPin,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Apple-style ambient lighting highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#2997ff]/15 via-[#a855f7]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Apple Pill Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-black/[0.03] dark:bg-white/[0.06] backdrop-blur-2xl text-xs font-medium text-[#86868b] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2997ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2997ff]"></span>
          </span>
          <span className="text-foreground/90 font-medium">
            Available for Roles &middot; Bengaluru &amp; Remote
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

        {/* Apple-style Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#86868b] mb-6"
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
          Building high-concurrency backend architectures, real-time AI tooling, and cloud-native systems. Taking mission-critical features from concept to production.
        </motion.p>

        {/* Apple Pill Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          {/* Primary Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071e3] dark:bg-[#f5f5f7] text-white dark:text-[#000000] font-medium text-sm hover:opacity-90 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Pill */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.14] border border-black/[0.08] dark:border-white/[0.12] text-foreground font-medium text-sm transition-all duration-200 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
            <span>Contact Me</span>
          </a>

          {/* Apple-style link with chevron */}
          <a
            href={personalInfo.resumeUrl}
            download="Gowtham_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline underline-offset-4 transition-all cursor-pointer"
          >
            <span>Download Resume</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Bottom Specs Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-border/80 dark:border-white/[0.08] text-xs text-[#86868b]"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-foreground/70" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="hidden sm:block text-border dark:text-white/[0.1]">&bull;</div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{personalInfo.githubUsername}</span>
          </a>

          <div className="hidden sm:block text-border dark:text-white/[0.1]">&bull;</div>

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

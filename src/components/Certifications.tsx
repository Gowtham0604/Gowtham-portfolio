'use client';

import * as React from 'react';
import { certifications } from '@/data/portfolio';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500" />
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-mono font-semibold">
            05. Credentials
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Certifications & Accreditations
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10 text-sm sm:text-base">
          Validated problem solving and domain expertise across core languages and development paradigms.
        </p>

        {/* Horizontal Badge Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 hover:shadow-glow transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group-hover:scale-105 transition-transform shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{cert.badgeText || 'Verified'}</span>
                </div>
                <h3 className="font-bold text-foreground text-base truncate group-hover:text-emerald-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Issued by {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

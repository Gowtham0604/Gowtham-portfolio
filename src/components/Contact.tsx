'use client';

import * as React from 'react';
import { personalInfo } from '@/data/portfolio';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phoneRaw);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Gowtham,\n\n${formData.message}\n\nFrom:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500" />
          <span className="text-xs uppercase tracking-widest text-emerald-500 font-mono font-semibold">
            06. Get in Touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Let&apos;s Build Something Together
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-sm sm:text-base">
          I am actively exploring opportunities as a Forward Deployed Engineer, AI Engineer, or Full-Stack Developer. Feel free to reach out directly or send a message.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-muted-foreground block">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-foreground hover:text-emerald-500 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2.5 rounded-lg border border-border bg-muted/50 hover:bg-muted text-foreground transition-colors shrink-0 cursor-pointer"
                title="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-muted-foreground block">
                    Phone
                  </span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-sm sm:text-base font-semibold text-foreground hover:text-emerald-500 transition-colors truncate block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                aria-label="Copy phone number"
                className="p-2.5 rounded-lg border border-border bg-muted/50 hover:bg-muted text-foreground transition-colors shrink-0 cursor-pointer"
                title="Copy phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-[#0a66c2]/10 border border-[#0a66c2]/20 text-[#0a66c2] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-muted-foreground block">
                    LinkedIn
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-emerald-500 transition-colors truncate block">
                    {personalInfo.linkedinUsername}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/40 transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-muted border border-border text-foreground shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-muted-foreground block">
                    GitHub
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-emerald-500 transition-colors truncate block">
                    {personalInfo.githubUsername}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>
          </div>

          {/* Right Column: Interactive Mailto Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl border border-border bg-card shadow-sm relative">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <h3 className="text-xl font-bold text-foreground">Send a Quick Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5 uppercase">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Opportunity: Forward Deployed Engineer"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-muted-foreground mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the role, project, or what you'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-sm transition-all shadow-sm hover:shadow-glow cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Mail Client</span>
                </button>

                {submitted && (
                  <p className="text-xs text-emerald-500 font-mono mt-2 animate-fadeIn">
                    ✓ Opening your mail client with pre-filled message...
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

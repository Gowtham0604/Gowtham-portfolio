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
  ArrowUpRight,
  Send,
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
      formData.subject || `Inquiry from ${formData.name || 'Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Gowtham,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 border-t border-border dark:border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
            Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Get in touch.
          </h2>
          <p className="text-[#86868b] mt-2 max-w-xl text-base">
            Exploring Forward Deployed, AI, and Full-Stack Engineering roles in Bengaluru and remote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="rounded-3xl p-6 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-foreground shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#86868b] block">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-foreground hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email"
                className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-foreground transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#30d158]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="rounded-3xl p-6 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-foreground shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#86868b] block">Phone</span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-sm font-semibold text-foreground hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors truncate block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                aria-label="Copy phone"
                className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-foreground transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-[#30d158]" />
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
              className="rounded-3xl p-6 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex items-center justify-between gap-4 group hover:border-black/[0.15] dark:hover:border-white/[0.2] transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-[#0a66c2]/10 dark:bg-[#0a66c2]/20 text-[#0a66c2] flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#86868b] block">LinkedIn</span>
                  <span className="text-sm font-semibold text-foreground truncate block">
                    {personalInfo.linkedinUsername}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-foreground transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl p-6 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex items-center justify-between gap-4 group hover:border-black/[0.15] dark:hover:border-white/[0.2] transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-foreground shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#86868b] block">GitHub</span>
                  <span className="text-sm font-semibold text-foreground truncate block">
                    {personalInfo.githubUsername}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-foreground transition-colors" />
            </a>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-card dark:bg-[#161617] border border-border dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none">
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-6">
                Send a direct message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#86868b] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#86868b] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#86868b] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Forward Deployed / AI Engineering Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#86868b] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your team, challenge, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0071e3] dark:bg-[#f5f5f7] text-white dark:text-[#000000] font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    <span>Launch Mail Client</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {submitted && (
                  <p className="text-xs text-[#0071e3] dark:text-[#2997ff] font-medium pt-2">
                    ✓ Opening your email client with prefilled details...
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

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
            <div className="py-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-foreground shrink-0 shadow-sm">
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
                className="bg-black/5 dark:bg-white/10 text-foreground hover:bg-black/10 dark:hover:bg-white/20 p-2.5 rounded-full text-foreground cursor-pointer"
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
            <div className="py-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-foreground shrink-0 shadow-sm">
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
                className="bg-black/5 dark:bg-white/10 text-foreground hover:bg-black/10 dark:hover:bg-white/20 p-2.5 rounded-full text-foreground cursor-pointer"
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
              className="py-6 flex items-center justify-between gap-4 group cursor-pointer"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-[#0a66c2]/10 dark:bg-[#0a66c2]/20 text-[#0a66c2] flex items-center justify-center shrink-0 shadow-sm">
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
              className="py-6 flex items-center justify-between gap-4 group cursor-pointer"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-foreground shrink-0 shadow-sm">
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
            <div className="py-8">
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
                      className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.12] bg-black/[0.03] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all"
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
                      className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.12] bg-black/[0.03] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all"
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
                    className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.12] bg-black/[0.03] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all"
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
                    className="w-full px-4 py-3 rounded-2xl border border-border dark:border-white/[0.12] bg-black/[0.03] dark:bg-white/[0.04] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-foreground text-background hover:opacity-90 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm cursor-pointer shadow-md"
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

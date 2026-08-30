# Gowtham S — Developer Portfolio

A modern, minimal, engineering-grade developer portfolio website for **Gowtham S** (Forward Deployed Engineer / AI Engineer / Full-Stack Developer), built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for technical recruiters and engineering leaders with clean typography, generous whitespace, dark-mode default with light-mode toggle, subtle scroll animations, and zero-config deployment readiness on **Vercel**.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Islands)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark mode default + instant toggle)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Google Fonts (`Inter` & `JetBrains Mono` via `next/font`)
- **Deployment**: [Vercel](https://vercel.com/) (Zero config required)

---

## 🚀 Sections Included

1. **Hero**: Tagline, 2-line intro, status pill (*Available for Roles in Bengaluru & Remote*), quick CTA buttons (*View Work*, *Contact Me*, *Download Resume*), and social links.
2. **About**: Academic credentials from Malnad College of Engineering (B.E. ISE, CGPA 7.74), engineering philosophy, and 4 core pillars.
3. **Experience**: Interactive timeline detailing Forward Deployed Engineer internship at **SupaDev Technologies Pvt Ltd**, with production backend responsibilities and AWS / CI/CD achievements.
4. **Projects**: Detailed project cards with architecture highlights and tech tags:
   - **SupaCam** — AI-Based Safety Monitoring System (Python, Go, OpenCV, WebSockets, PostgreSQL)
   - **Valzy** — Automated Property Valuation Platform (Python, JS, AWS Lambda, PostgreSQL)
5. **Skills**: Categorized badges spanning Languages, Backend & APIs, Cloud & DevOps, Databases, AI/LLM Tooling, and Developer Tools.
6. **Certifications**: Horizontal verified badge row (HackerRank Python, HackerRank SQL, Web Application Development).
7. **Contact**: Clickable contact channels, one-click copy buttons for email and phone number, and an interactive `mailto:` client launch form.
8. **Footer**: Clean footer with live uptime pulse and quick back-to-top navigation.

---

## 🛠️ Getting Started Locally

### Prerequisites

- Node.js 18+ or 20+
- npm (or pnpm / yarn)

### 1. Clone the repository
```bash
git clone https://github.com/Gowtham0604/Gowtham-portfolio.git
cd Gowtham-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel (Zero Config)

This portfolio is configured for zero-config deployment on Vercel:

### Option A: Via Vercel Dashboard (Recommended)
1. Push this repository to your GitHub account (`Gowtham0604/Gowtham-portfolio`).
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import `Gowtham-portfolio` from your GitHub repositories.
4. Keep the default settings (Framework Preset: **Next.js**, Root Directory: `./`).
5. Click **"Deploy"**. Vercel will automatically build and assign a free `.vercel.app` URL with automated SSL.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📄 Updating Your Resume PDF

A starter placeholder resume is located at `public/resume.pdf`. Whenever you update your resume:
1. Replace `public/resume.pdf` with your updated PDF file (keep the filename as `resume.pdf`).
2. Commit and push:
```bash
git add public/resume.pdf
git commit -m "Update resume PDF"
git push
```
Vercel will automatically redeploy with your latest resume.

---

## 👤 Contact

- **Gowtham S**
- **Location**: Bengaluru, Karnataka, India
- **Email**: [gowthams6687@gmail.com](mailto:gowthams6687@gmail.com)
- **Phone**: [+91 9663716435](tel:9663716435)
- **GitHub**: [github.com/Gowtham0604](https://github.com/Gowtham0604)
- **LinkedIn**: [linkedin.com/in/gowtham-s-11532238a](https://linkedin.com/in/gowtham-s-11532238a)

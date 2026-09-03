import { Project, ExperienceItem, SkillCategory, Certification } from '@/types';

export const personalInfo = {
  name: 'Gowtham S',
  initials: 'GS',
  role: 'Data & Backend Engineer',
  targetRoles: ['Data & Backend Engineer', 'Data Pipeline Engineer', 'Python / Backend Developer'],
  location: 'Bengaluru, Karnataka',
  email: 'gowthams6687@gmail.com',
  phone: '+91 9663716435',
  phoneRaw: '9663716435',
  github: 'https://github.com/Gowtham0604',
  githubUsername: 'Gowtham0604',
  linkedin: 'https://linkedin.com/in/gowtham-s-11532238a',
  linkedinUsername: 'gowtham-s-11532238a',
  resumeUrl: '/resume.pdf',
  shortIntro:
    'Data & Backend Engineer specializing in Python, SQL, PostgreSQL, and distributed data pipelines. Experienced in building production data ingestion systems, optimizing high-volume relational schemas, and shipping independent live products.',
  bio: [
    'I hold a Bachelor of Engineering in Information Science & Engineering from Malnad College of Engineering (2021–2025, CGPA: 7.74). My engineering focus centers on robust backend architectures, high-volume data ingestion/ETL pipelines, and relational database optimization in PostgreSQL.',
    'Through my production internship at SupaDev Technologies, I built client-facing data pipelines in Python, wrote latency-reducing SQL queries against high-volume tables, and automated deployment via GitHub Actions CI/CD. In addition to enterprise data systems, I have independently architected, built, and shipped live, self-hosted web platforms including SideHustlesJob and RCBTeam.',
  ],
  education: {
    degree: 'B.E. Information Science & Engineering',
    institution: 'Malnad College of Engineering',
    period: '2021 – 2025',
    grade: 'CGPA 7.74',
    location: 'Hassan, Karnataka',
  },
};

export const experiences: ExperienceItem[] = [
  {
    company: 'SupaDev Technologies Pvt Ltd',
    location: 'Bengaluru, Karnataka',
    role: 'Forward Deployed Engineer Intern',
    period: 'Feb 2026 – Jun 2026',
    type: 'Professional Internship',
    responsibilities: [
      'Built and maintained data ingestion, transformation, and storage pipelines in Python for two production client-facing applications, moving data reliably into PostgreSQL.',
      'Wrote and optimized SQL queries against relational schemas for data extraction and reporting, reducing query latency on high-volume tables.',
      'Ran data validation and reconciliation checks, tracing discrepancies to root cause and verifying fixes against defined test cases before release.',
      'Set up CI/CD pipelines with GitHub Actions to automate testing and deployment, cutting manual release steps and improving deployment consistency.',
      'Collaborated in sprint planning and code reviews via Git/GitHub, and maintained technical documentation for data features and API integrations.',
    ],
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Data Pipelines', 'GitHub Actions', 'CI/CD', 'Git/GitHub'],
  },
];

export const projects: Project[] = [
  {
    title: 'SupaCam',
    subtitle: 'AI-Based Real-Time Safety Monitoring System',
    description:
      'Real-time safety compliance and monitoring system that ingests live video feeds, processes frames with OpenCV, and streams safety violation alerts to a live review dashboard.',
    highlights: [
      'Built a real-time data pipeline in Python that ingests live video streams and processes frames with OpenCV to detect safety violations such as missing helmets.',
      'Designed a structured PostgreSQL schema to persist detection events, timestamps, bounding boxes, and compliance metadata.',
      'Implemented a low-latency WebSocket service to push real-time detection events and instant alerts to an operational review dashboard.',
      'Optimized frame capture and ingestion throughput to maintain low pipeline latency during concurrent stream processing.',
    ],
    tags: ['Python', 'OpenCV', 'WebSockets', 'PostgreSQL', 'Go', 'Data Pipelines'],
    github: 'https://github.com/Gowtham0604/Gowtham-portfolio',
    category: 'Computer Vision & Streaming',
  },
  {
    title: 'Valzy',
    subtitle: 'Automated Property Valuation & Data Platform',
    description:
      'Data ingestion and comparative valuation platform that collects real estate listings across multiple portals, normalizes property metrics, and automates report generation workflows.',
    highlights: [
      'Built an automated ETL pipeline collecting property listing data from multiple real estate sources into PostgreSQL, powering price-trend analysis across 2,000+ listings.',
      'Designed and indexed relational schemas in PostgreSQL for efficient storage, multi-attribute filtering, and high-performance pricing queries.',
      'Implemented serverless workflows with AWS Lambda to automate scheduled data ingestion and dynamic appraisal report generation.',
      'Built data transformation pipelines in Python and JavaScript to standardize disparate listing schemas and calculate historical price trends.',
    ],
    tags: ['Python', 'JavaScript', 'PostgreSQL', 'AWS Lambda', 'ETL/ELT', 'Data Pipelines'],
    github: 'https://github.com/Gowtham0604/Gowtham-portfolio',
    category: 'Data Platform & Cloud ETL',
  },
  {
    title: 'SideHustlesJob',
    subtitle: 'Bengaluru Part-Time Job Discovery Platform',
    badge: 'Independent Project · Self-Hosted · Live',
    description:
      'Independently built and deployed job discovery product featuring curated local part-time opportunities, geolocation-based area filtering, and structured data validation.',
    highlights: [
      'Architected and deployed a self-hosted job discovery platform featuring curated local part-time opportunities and employer job submission workflows.',
      'Implemented area and coordinate-based proximity search enabling candidates to discover commuting-friendly opportunities across Bengaluru neighborhoods.',
      'Engineered backend foundation and relational SQL schema migrations to validate submissions, enforce data consistency, and index listing attributes.',
      'Deployed on Cloudflare Edge with automated CI/CD, client-side caching, JSON-LD structured data, and sub-second page performance.',
    ],
    tags: ['Go', 'SQL', 'Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Edge', 'REST APIs'],
    liveUrl: 'https://sidehustlesjob.com/',
    github: 'https://github.com/Gowtham0604/sidehustle',
    category: 'Independent Product · Live',
  },
  {
    title: 'RCBTeam',
    subtitle: 'Daily IPL & Cricket Interactive Gaming Platform',
    badge: 'Independent Project · Self-Hosted · Live',
    description:
      'Independently built and deployed interactive cricket platform delivering daily player-guessing challenges, automated IPL trivia, and programmatic sports news.',
    highlights: [
      'Engineered an interactive "Guess the Cricketer" game engine matching player era, nationality, role, and career metrics with a Hot & Cold feedback algorithm.',
      'Built an automated daily IPL quiz engine delivering 5 verified daily challenge questions with source-backed answers and state persistence.',
      'Designed programmatic content architecture with schema.org JSON-LD structured data for teams, trivia, and match histories.',
      'Self-hosted and deployed to Cloudflare Edge with global CDN caching, responsive mobile drawer navigation, and zero-latency client hydration.',
    ],
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Edge', 'JSON-LD', 'Data Modeling'],
    liveUrl: 'https://rcbteam.in/',
    github: 'https://github.com/Gowtham0604/cricket-hot-cold',
    category: 'Independent Product · Live',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Go', level: 'Proficient' },
      { name: 'JavaScript', level: 'Proficient' },
    ],
  },
  {
    title: 'Data & Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'ETL / ELT Pipelines', level: 'Advanced' },
      { name: 'Data Pipelines', level: 'Advanced' },
      { name: 'Relational Schema Design', level: 'Advanced' },
      { name: 'SQL Query Optimization', level: 'Advanced' },
      { name: 'Data Validation & Reconciliation', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & Architecture',
    skills: [
      { name: 'Backend Development', level: 'Advanced' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'WebSockets', level: 'Proficient' },
      { name: 'OpenCV (Video Processing)', level: 'Proficient' },
      { name: 'Real-Time Event Streaming', level: 'Proficient' },
      { name: 'Data Ingestion & Storage', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: [
      { name: 'AWS (Lambda, EC2, S3)', level: 'Proficient' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'CI/CD (GitHub Actions)', level: 'Advanced' },
      { name: 'Git / GitHub', level: 'Advanced' },
      { name: 'Cloudflare Edge', level: 'Proficient' },
      { name: 'DBeaver', level: 'Proficient' },
      { name: 'Postman', level: 'Proficient' },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Python',
    issuer: 'HackerRank',
    badgeText: 'Verified Skill',
  },
  {
    title: 'SQL',
    issuer: 'HackerRank',
    badgeText: 'Verified Skill',
  },
  {
    title: 'Web Application Development',
    issuer: 'Accredited Training',
    badgeText: 'Certified',
  },
];

export const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

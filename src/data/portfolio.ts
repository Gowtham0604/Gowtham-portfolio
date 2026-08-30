import { Project, ExperienceItem, SkillCategory, Certification } from '@/types';

export const personalInfo = {
  name: 'Gowtham S',
  initials: 'GS',
  role: 'Forward Deployed Engineer & Full-Stack Developer',
  targetRoles: ['Forward Deployed Engineer', 'AI Engineer', 'Full-Stack Developer'],
  location: 'Bengaluru, Karnataka, India',
  email: 'gowthams6687@gmail.com',
  phone: '+91 9663716435',
  phoneRaw: '9663716435',
  github: 'https://github.com/Gowtham0604',
  githubUsername: 'Gowtham0604',
  linkedin: 'https://linkedin.com/in/gowtham-s-11532238a',
  linkedinUsername: 'gowtham-s-11532238a',
  resumeUrl: '/resume.pdf',
  shortIntro:
    'Forward Deployed Engineer and Full-Stack Developer with experience building production backend systems, AI-driven tooling, and shipping robust client-facing platforms from concept to deployment.',
  bio: [
    'I hold a Bachelor of Engineering in Information Science & Engineering from Malnad College of Engineering (2021–2025, CGPA: 7.74). My engineering philosophy revolves around building resilient backend architectures, real-time distributed pipelines, and practical AI tooling.',
    'As a Forward Deployed Engineer, I enjoy bridging the gap between cutting-edge technology and customer business requirements — delivering high-reliability services on AWS, streamlining CI/CD, and iterating rapidly on production telemetry and client feedback.',
  ],
  education: {
    degree: 'B.E. in Information Science & Engineering',
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
    type: 'Internship',
    responsibilities: [
      'Engineered and maintained robust backend features for two production, client-facing enterprise web applications in Python.',
      'Deployed, configured, and managed cloud services and microservices on Amazon Web Services (AWS).',
      'Architected and implemented end-to-end automated CI/CD deployment pipelines using GitHub Actions to accelerate release cycles.',
      'Actively monitored production telemetry, rapidly triaged edge-case anomalies, and iterated on features based on continuous user feedback.',
    ],
    technologies: ['Python', 'AWS', 'GitHub Actions', 'Docker', 'REST APIs', 'PostgreSQL'],
  },
];

export const projects: Project[] = [
  {
    title: 'SupaCam',
    subtitle: 'AI-Based Real-Time Safety Monitoring System',
    description:
      'Industrial computer-vision platform engineered to detect on-site safety violations (such as missing helmets and PPE non-compliance) with high-speed object detection and tracking.',
    highlights: [
      'Real-time streaming pipeline utilizing OpenCV and deep learning object tracking models.',
      'Low-latency WebSocket event streaming server built with Go for instant client-side alert notifications.',
      'PostgreSQL-backed audit store tracking compliance incidents, timestamps, and confidence scores.',
      'Interactive audit dashboard providing actionable safety analytics and inspection logs.',
    ],
    tags: ['Python', 'Go', 'OpenCV', 'WebSockets', 'PostgreSQL', 'Computer Vision'],
    github: 'https://github.com/Gowtham0604/Gowtham-portfolio',
    category: 'AI / Backend',
  },
  {
    title: 'Valzy',
    subtitle: 'Automated Property Valuation & Comparative Analytics Platform',
    description:
      'Full-stack analytical platform engineered for real estate valuers to compare property pricing, analyze market trends, and instantly generate official valuation appraisals.',
    highlights: [
      'Custom browser extension for valuers to extract property specifications directly from listing portals.',
      'Scalable web crawler pipeline collecting and indexing 2,000+ live property listings for historical trend analysis.',
      'Event-driven serverless pipeline on AWS Lambda that dynamically generates valuation reports in PDF and Word formats.',
      'Relational schema in PostgreSQL optimizing geospatial queries and price per square foot comparisons.',
    ],
    tags: ['Python', 'JavaScript', 'PostgreSQL', 'AWS Lambda', 'Web Crawling', 'Serverless'],
    github: 'https://github.com/Gowtham0604/Gowtham-portfolio',
    category: 'Full-Stack / Cloud',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Go', level: 'Proficient' },
      { name: 'SQL', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'WebSockets', level: 'Proficient' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3 / Tailwind', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (Lambda, EC2, S3)', level: 'Proficient' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'Kubernetes', level: 'Familiar' },
      { name: 'GitHub Actions', level: 'Advanced' },
      { name: 'Git & Version Control', level: 'Advanced' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MySQL', level: 'Proficient' },
    ],
  },
  {
    title: 'AI & LLM Tooling',
    skills: [
      { name: 'LLM Integration', level: 'Proficient' },
      { name: 'Generative AI Workflows', level: 'Advanced' },
      { name: 'Claude Code', level: 'Advanced' },
      { name: 'Cursor IDE', level: 'Advanced' },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'VS Code', level: 'Advanced' },
      { name: 'DBeaver', level: 'Proficient' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Linux / Bash', level: 'Proficient' },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Python Certification',
    issuer: 'HackerRank',
    badgeText: 'Verified Skill',
  },
  {
    title: 'SQL Certification',
    issuer: 'HackerRank',
    badgeText: 'Verified Skill',
  },
  {
    title: 'Web Application Development',
    issuer: 'Certified Training',
    badgeText: 'Accredited',
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

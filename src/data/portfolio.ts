import { Project, ExperienceItem, SkillCategory, Certification } from '@/types';

export const personalInfo = {
  name: 'Gowtham S',
  initials: 'GS',
  role: 'Forward Deployed Engineer & Data / Backend Engineer',
  targetRoles: ['Forward Deployed Engineer', 'Data & Backend Engineer', 'Data Pipeline Engineer'],
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
    'Forward Deployed Engineer specializing in data ingestion pipelines, SQL query optimization, and reliable backend systems in Python. Experienced in moving high-volume data reliably into PostgreSQL, building automated CI/CD pipelines, and delivering production client-facing applications.',
  bio: [
    'I hold a Bachelor of Engineering in Information Science & Engineering from Malnad College of Engineering (2021–2025, CGPA: 7.74). My engineering focus centers on building resilient data pipelines, optimizing relational database architectures, and deploying cloud automation.',
    'As a Forward Deployed Engineer Intern at SupaDev Technologies, I engineered data ingestion and transformation pipelines for client-facing applications, optimized complex SQL queries for high-volume PostgreSQL tables, and implemented automated CI/CD workflows using GitHub Actions to improve deployment consistency.',
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
    type: 'Internship',
    responsibilities: [
      'Built and maintained data ingestion, transformation, and storage pipelines in Python for two production client-facing applications, moving data reliably into PostgreSQL.',
      'Wrote and optimized SQL queries against relational schemas for data extraction and reporting, reducing query latency on high-volume tables.',
      'Ran data validation and reconciliation checks, tracing discrepancies to root cause and verifying fixes against defined test cases before release.',
      'Set up CI/CD pipelines with GitHub Actions to automate testing and deployment, cutting manual release steps and improving deployment consistency.',
      'Collaborated in sprint planning and code reviews via Git/GitHub, and maintained technical documentation for data features and API integrations.',
    ],
    technologies: ['Python', 'SQL', 'PostgreSQL', 'GitHub Actions', 'Git/GitHub', 'CI/CD', 'AWS', 'Docker'],
  },
];

export const projects: Project[] = [
  {
    title: 'SupaCam',
    subtitle: 'AI-Based Safety Monitoring System',
    description:
      'Real-time safety compliance and monitoring platform built to ingest live video streams, process video frames with OpenCV, and detect safety violations such as missing helmets.',
    highlights: [
      'Built a real-time data pipeline that ingests live video streams, processes frames with OpenCV, and detects safety violations such as missing helmets.',
      'Designed a PostgreSQL schema to store structured detection events and built a WebSocket service to push low-latency alerts to a live review dashboard.',
    ],
    tags: ['Python', 'OpenCV', 'WebSockets', 'PostgreSQL'],
    github: 'https://github.com/Gowtham0604/Gowtham-portfolio',
    category: 'AI & Real-Time',
  },
  {
    title: 'Valzy',
    subtitle: 'Property Valuation Platform',
    description:
      'Scalable property valuation and comparative market analytics platform designed to collect real estate data across multiple sources, optimize relational storage, and automate valuation report generation.',
    highlights: [
      'Built an ETL pipeline that collects property listing data from multiple real estate sources and loads it into PostgreSQL, powering price-trend analysis across 2,000+ listings.',
      'Designed relational schemas for efficient storage and querying of listing data, and used AWS Lambda to automate parts of the ingestion and report-generation workflow.',
    ],
    tags: ['Python', 'JavaScript', 'PostgreSQL', 'AWS Lambda'],
    github: 'https://github.com/Gowtham0604/Gowtham-portfolio',
    category: 'Data & Cloud',
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
      { name: 'MySQL', level: 'Proficient' },
      { name: 'RDBMS design & indexing', level: 'Advanced' },
      { name: 'ETL/ELT pipeline development', level: 'Advanced' },
      { name: 'Data validation & reconciliation', level: 'Advanced' },
      { name: 'JSON/CSV', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS (Lambda, EC2, S3)', level: 'Proficient' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'Kubernetes', level: 'Familiar' },
      { name: 'Git/GitHub', level: 'Advanced' },
      { name: 'CI/CD (GitHub Actions)', level: 'Advanced' },
      { name: 'DBeaver', level: 'Proficient' },
      { name: 'Postman', level: 'Proficient' },
    ],
  },
  {
    title: 'Practices',
    skills: [
      { name: 'Data pipeline development', level: 'Advanced' },
      { name: 'Schema design', level: 'Advanced' },
      { name: 'Debugging', level: 'Advanced' },
      { name: 'Code review', level: 'Advanced' },
      { name: 'Agile collaboration', level: 'Proficient' },
      { name: 'Technical documentation', level: 'Advanced' },
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

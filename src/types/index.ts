export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  github?: string;
  liveUrl?: string;
  category: 'AI / Backend' | 'Full-Stack / Cloud';
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Familiar';
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate?: string;
  badgeText?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}

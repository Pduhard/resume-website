export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  additionalLinks?: {
    title: string;
    url: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
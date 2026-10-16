export type ProjectCategory = 'all' | 'residential' | 'commercial' | 'office' | 'hospitality' | 'retail';

export interface Project {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'office' | 'hospitality' | 'retail';
  categoryLabel: string;
  location: string;
  style: string;
  year: string;
  area: string;
  image: string;
  summary: string;
  description: string;
  keyMaterials: string[];
  scope: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  imageFallbackTexture: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  slug: string;
  description: string;
  characteristics: string[];
  materials: string[];
  colorPalette: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  areaSize: string;
  budgetRange: string;
  timeline: string;
  message: string;
  agreedToTerms: boolean;
}

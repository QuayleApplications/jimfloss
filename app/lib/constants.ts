/**
 * Design system constants for consistent styling across the application
 * Single source of truth for colors, spacing, and other design tokens
 */

// Brand Colors
export const COLORS = {
  primary: '#87B1C1',
  primaryDark: '#6a8fa0',
  secondary: '#181D1F',
  text: {
    primary: '#181D1F',    // 13.1:1 contrast ratio
    secondary: '#6B7280',  // 4.6:1 contrast ratio (was #8F959B at 2.85:1)
    muted: '#9CA3AF',      // 3.5:1 for large text
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    dark: '#181D1F',
  },
  border: {
    light: 'rgba(0, 0, 0, 0.1)',
    primary: '#87B1C1',
  },
} as const;

// Navigation sections
export const NAV_SECTIONS = {
  HOME: 'home',
  RESEARCH: 'research',
  SOFTWARE: 'software',
  DATASETS: 'datasets',
  BLOG: 'blog',
  CV: 'cv',
  CONTACT: 'contact',
} as const;

export const NAV_ITEMS = [
  { id: NAV_SECTIONS.HOME, label: 'Home' },
  { id: NAV_SECTIONS.RESEARCH, label: 'Research' },
  { id: NAV_SECTIONS.SOFTWARE, label: 'Software' },
  { id: NAV_SECTIONS.DATASETS, label: 'Datasets' },
  { id: NAV_SECTIONS.BLOG, label: 'Blog' },
  { id: NAV_SECTIONS.CV, label: 'CV' },
  { id: NAV_SECTIONS.CONTACT, label: 'Contact' },
] as const;

// Contact information
export const CONTACT_INFO = {
  name: 'Jim Floss',
  title: 'Senior Full-Stack Developer',
  company: 'Quayle Applications',
  location: 'Akron, OH',
  email: 'jim@quayleapps.com',
  phone: '+1 (330) 858-6369',
  phoneRaw: '+15551234567',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  website: 'https://quayleapps.com',
  googleScholar: 'https://scholar.google.com',
  orcid: 'https://orcid.org',
  kaggle: 'https://kaggle.com',
  huggingFace: 'https://huggingface.co',
} as const;

// Skills data
export const SKILLS = [
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'React', level: 95 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 82 },
  { name: 'AWS', level: 85 },
  { name: 'PostgreSQL', level: 87 },
  { name: 'Docker', level: 80 },
] as const;

// Animation/Scroll constants
export const SCROLL = {
  OFFSET: 100,
  DURATION: 500,
  TRANSITION_DELAY: 600,
} as const;

// Layout constants
export const LAYOUT = {
  SIDEBAR_WIDTH: 380,
  MAX_CONTENT_WIDTH: '4xl',
} as const;

// Copyright
export const COPYRIGHT_YEAR = new Date().getFullYear();
export const COPYRIGHT_TEXT = `© ${COPYRIGHT_YEAR} ${CONTACT_INFO.company}. All rights reserved.`;

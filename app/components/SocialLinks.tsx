/**
 * Social links component
 * Single Responsibility: Render social media links with consistent styling
 * DRY: Reusable across footer and sidebar
 */

import React from 'react';
import { Github, GraduationCap, Linkedin, Globe } from 'lucide-react';
import { ORCIDIcon, KaggleIcon, HuggingFaceIcon } from './icons/SocialIcons';
import { SOCIAL_LINKS } from '../lib/constants';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SOCIAL_LINK_CONFIG: SocialLink[] = [
  {
    href: SOCIAL_LINKS.github,
    label: 'GitHub',
    icon: <Github className="w-6 h-6" />,
  },
  {
    href: SOCIAL_LINKS.googleScholar,
    label: 'Google Scholar',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    href: SOCIAL_LINKS.orcid,
    label: 'ORCID',
    icon: <ORCIDIcon className="w-6 h-6" />,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    href: SOCIAL_LINKS.kaggle,
    label: 'Kaggle',
    icon: <KaggleIcon className="w-6 h-6" />,
  },
  {
    href: SOCIAL_LINKS.huggingFace,
    label: 'Hugging Face',
    icon: <HuggingFaceIcon className="w-6 h-6" />,
  },
];

const SIDEBAR_SOCIAL_LINKS: SocialLink[] = [
  {
    href: SOCIAL_LINKS.linkedin,
    label: 'LinkedIn Profile',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.github,
    label: 'GitHub Profile',
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.website,
    label: 'Website',
    icon: <Globe className="w-5 h-5" />,
  },
];

interface SocialLinksProps {
  variant?: 'footer' | 'sidebar';
  className?: string;
}

/**
 * Renders a list of social media links
 */
export function SocialLinks({ variant = 'footer', className = '' }: SocialLinksProps) {
  const links = variant === 'footer' ? SOCIAL_LINK_CONFIG : SIDEBAR_SOCIAL_LINKS;
  const linkClassName = variant === 'footer' 
    ? 'text-[#CACCC9] hover:text-white transition-colors'
    : 'text-[#87B1C1] hover:text-[#6a8fa0] transition-colors';

  return (
    <div className={variant === 'footer' ? `flex gap-6 ${className}` : `flex gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

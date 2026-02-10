/**
 * Utility functions for scroll behavior
 * Handles smooth scrolling with polyfills and animations
 */

import { SCROLL } from './constants';

/**
 * Easing function for smooth animation
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

/**
 * Smooth scroll polyfill for browsers that don't support native smooth scrolling
 */
export const smoothScrollTo = (targetPosition: number, duration = SCROLL.DURATION) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Check if browser supports native smooth scrolling
 */
export const supportsNativeSmoothScroll = (): boolean => {
  return 'scrollBehavior' in document.documentElement.style;
};

/**
 * Scroll to a section by ID with smooth animation
 */
export const scrollToSection = (sectionId: string, offset = SCROLL.OFFSET): void => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  if (supportsNativeSmoothScroll()) {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    smoothScrollTo(offsetPosition);
  }
};

/**
 * Get the currently visible section based on scroll position
 */
export const getCurrentSection = (sections: string[]): string | null => {
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (!element) continue;

    const rect = element.getBoundingClientRect();
    // Section is considered active if it's in the top 30% of viewport
    if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
      return sectionId;
    }
  }
  return sections[0] || null;
};

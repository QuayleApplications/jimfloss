import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

/**
 * SEO component for dynamically updating meta tags
 * Useful for SPAs to update meta information based on current view
 */
export function SEO({
  title = 'Jim Floss - Senior Full-Stack Developer | React, TypeScript, AWS',
  description = 'Innovative software developer with 8+ years of experience building scalable applications and leading development teams. Specialized in React, Node.js, TypeScript, and cloud architecture.',
  canonical = 'https://quayleapps.com/',
  ogImage = 'https://quayleapps.com/og-image.jpg',
  ogType = 'website',
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (canonicalElement) {
      canonicalElement.setAttribute('href', canonical);
    } else {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      canonicalElement.setAttribute('href', canonical);
      document.head.appendChild(canonicalElement);
    }

    // Update robots meta
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }
  }, [title, description, canonical, ogImage, ogType, noindex]);

  return null; // This component doesn't render anything
}

/**
 * Hook to update page title dynamically
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}

import { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../lib/constants';
import { scrollToSection as scrollToSectionUtil } from '../lib/scroll';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    // Set up Intersection Observer for automatic section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top 30% of viewport
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // Only update active section if user is not manually scrolling
      if (!isScrollingRef.current) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }
    }, observerOptions);

    // Observe all sections
    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);
    scrollToSectionUtil(id);
    
    // Re-enable automatic section detection after scroll completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 hidden lg:block">
      <div className="max-w-4xl mx-auto px-6">
        <ul className="flex items-center justify-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollToSection(item.id)}
                className={`px-4 py-4 transition-colors relative ${
                  activeSection === item.id
                    ? 'text-[#87B1C1]'
                    : 'text-[#6B7280] hover:text-[#181D1F]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#87B1C1]" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

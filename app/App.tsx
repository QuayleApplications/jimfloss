import { LeftSidebar } from './components/LeftSidebar';
import { MobileHeader } from './components/MobileHeader';
import { MainContent } from './components/MainContent';
import { Navigation } from './components/Navigation';
import { SocialLinks } from './components/SocialLinks';
import { COPYRIGHT_TEXT } from './lib/constants';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#87B1C1] focus:text-white focus:px-6 focus:py-3 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#87B1C1]"
      >
        Skip to main content
      </a>
      
      {/* Mobile Header - visible on tablets and phones */}
      <MobileHeader />

      <div className="flex">
        {/* Fixed Left Sidebar - visible on desktop only */}
        <LeftSidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-[380px]">
          {/* Desktop Header - visible on desktop only */}
          <header className="hidden lg:block bg-white border-b border-gray-200 py-8 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <img 
                  src="/images/QApps.png" 
                  alt="Quayle Applications" 
                  className="h-12 object-contain" 
                />
              </div>
              <h1 className="text-[#181D1F] text-center">Jim Floss</h1>
              <p className="text-[#87B1C1] text-center mt-2">Senior Full-Stack Developer</p>
            </div>
          </header>

          {/* Navigation Menu */}
          <Navigation />

          {/* Main Content */}
          <div id="main-content" className="px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <MainContent />
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-[#181D1F] text-white py-8 mt-20">
            <div className="max-w-4xl mx-auto px-6">
              {/* Platform Icons */}
              <div className="flex justify-center gap-6 mb-6">
                <SocialLinks variant="footer" />
              </div>
              
              {/* Copyright */}
              <p className="text-[#CACCC9] text-sm text-center">
                {COPYRIGHT_TEXT}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

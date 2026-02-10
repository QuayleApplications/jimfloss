import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { SidebarContent } from './SidebarContent';

export function MobileHeader() {
  return (
    <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors" aria-label="Open navigation menu">
              <Menu className="w-6 h-6 text-[#181D1F]" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-[380px] p-0 overflow-y-auto bg-[#F5F5F5]">
            <SheetTitle className="sr-only">Profile Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              View contact information, skills, and professional details
            </SheetDescription>
            <SidebarContent />
          </SheetContent>
        </Sheet>

        <div className="flex-1 flex justify-center">
          <img 
            src="/images/QApps.png" 
            alt="Quayle Applications" 
            className="h-10 object-contain" 
          />
        </div>

        <div className="w-10"></div>
      </div>

      <div className="px-6 pb-4 text-center">
        <h1 className="text-[#181D1F]">Jim Floss</h1>
        <p className="text-[#87B1C1] mt-1">Senior Full-Stack Developer</p>
      </div>
    </header>
  );
}

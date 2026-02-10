import { SidebarContent } from './SidebarContent';

export function LeftSidebar() {
  return (
    <aside className="hidden lg:block w-[380px] fixed left-0 top-0 h-screen bg-[#F5F5F5] border-r border-gray-200 overflow-y-auto">
      <SidebarContent />
    </aside>
  );
}

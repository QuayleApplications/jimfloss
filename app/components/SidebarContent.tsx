import { SimpleLazyImage } from './LazyImage';
import { SocialLinks } from './SocialLinks';
import { SKILLS } from '../lib/constants';

export function SidebarContent() {
  return (
    <div className="p-8 space-y-8">
      {/* Profile Photo */}
      <div className="flex justify-center pt-4">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#87B1C1] shadow-lg">
          <SimpleLazyImage 
            src="/images/jFloss.jpg" 
            alt="Jim Floss" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white p-6 rounded-sm shadow-sm space-y-6">
        <h3 className="text-[#181D1F] pb-2 border-b border-[#87B1C1]">Contact Information</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-xs text-[#6B7280] uppercase tracking-wide mb-1">Location</p>
            <p className="text-[#181D1F]">Akron, OH</p>
          </div>
          
          <div>
            <p className="text-xs text-[#6B7280] uppercase tracking-wide mb-1">Email</p>
            <a href="mailto:jim@quayleapps.com" className="text-[#87B1C1] hover:text-[#6a8fa0] transition-colors break-all">
              jim@quayleapps.com
            </a>
          </div>
          
          <div>
            <p className="text-xs text-[#6B7280] uppercase tracking-wide mb-1">Phone</p>
            <a href="tel:+15551234567" className="text-[#87B1C1] hover:text-[#6a8fa0] transition-colors">
              +1 (330) 858-6369
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-gray-300">
          <p className="text-xs text-[#6B7280] uppercase tracking-wide mb-3">Connect</p>
          <SocialLinks variant="sidebar" />
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white p-6 rounded-sm shadow-sm space-y-6">
        <h3 className="text-[#181D1F] pb-2 border-b border-[#87B1C1]">Skills & Expertise</h3>
        
        <div className="space-y-4">
          {SKILLS.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-[#181D1F]">{skill.name}</span>
                <span className="text-xs text-[#6B7280]">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#87B1C1] rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodologies */}
      <div className="bg-white p-6 rounded-sm shadow-sm space-y-4">
        <h3 className="text-[#181D1F] pb-2 border-b border-[#87B1C1]">Methodologies</h3>
        
        <div className="flex flex-wrap gap-2">
          {['Agile/Scrum', 'CI/CD', 'TDD', 'Microservices', 'RESTful APIs', 'Cloud Architecture'].map((method, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-[#F5F5F5] text-[#181D1F] text-sm rounded-sm border border-[#87B1C1]/20"
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

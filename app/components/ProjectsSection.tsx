import { Code2, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Cloud-Native E-Commerce Platform',
      description: 'Built a scalable microservices-based e-commerce platform serving 100K+ users with real-time inventory management, payment processing, and order tracking. Implemented using React, Node.js, and AWS services.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Developed a comprehensive analytics dashboard with real-time data visualization, custom reporting, and data export capabilities. Processed millions of events daily with sub-second latency.',
      technologies: ['TypeScript', 'React', 'GraphQL', 'MongoDB', 'WebSocket'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'AI-Powered Content Management System',
      description: 'Created an intelligent CMS with AI-assisted content generation, automatic SEO optimization, and multi-language support. Reduced content creation time by 60% while improving engagement metrics.',
      technologies: ['Next.js', 'Python', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="w-6 h-6 text-[#87B1C1]" />
        <h2 className="text-[#181D1F]">Featured Projects</h2>
      </div>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[#F5F5F5] p-6 rounded-sm border border-[#87B1C1]/10 hover:border-[#87B1C1]/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-[#87B1C1]">{project.title}</h3>
              <div className="flex gap-2 flex-shrink-0">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    className="text-[#6B7280] hover:text-[#87B1C1] transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    className="text-[#6B7280] hover:text-[#87B1C1] transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-[#6B7280] leading-relaxed mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-white text-[#181D1F] text-sm rounded-sm border border-[#87B1C1]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

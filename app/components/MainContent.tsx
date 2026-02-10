import { Suspense, lazy } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { SectionSkeleton } from './LoadingStates';

// Code splitting: lazy load heavy sections
const ProjectsSection = lazy(() =>
  import('./ProjectsSection').then((module) => ({ default: module.ProjectsSection }))
);
const ResearchSection = lazy(() =>
  import('./ResearchSection').then((module) => ({ default: module.ResearchSection }))
);
const DatasetsSection = lazy(() =>
  import('./DatasetsSection').then((module) => ({ default: module.DatasetsSection }))
);
const BlogSection = lazy(() =>
  import('./BlogSection').then((module) => ({ default: module.BlogSection }))
);
const ContactSection = lazy(() =>
  import('./ContactSection').then((module) => ({ default: module.ContactSection }))
);

export function MainContent() {
  return (
    <main className="space-y-12">
      {/* Profile Summary */}
      <section id="home" className="bg-[#F5F5F5] p-8 rounded-sm scroll-mt-24">
        <h2 className="text-[#181D1F] text-center mb-4">Think big. Start small. Scale fast.</h2>
        <p className="text-[#6B7280] text-center leading-relaxed">
          Innovative software developer with 8+ years of experience building scalable applications 
          and leading development teams. Specialized in full-stack development, cloud architecture, 
          and modern web technologies.
        </p>
      </section>

      {/* Experience */}
      <section id="software">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-[#87B1C1]" />
          <h2 className="text-[#181D1F]">Experience</h2>
        </div>
        
        <div className="space-y-8">
          <div className="relative pl-8 border-l-2 border-[#87B1C1]/30 pb-8">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#87B1C1] rounded-sm rotate-45" />
            <div className="space-y-2">
              <h3 className="text-[#87B1C1]">Senior Full-Stack Developer</h3>
              <p className="text-[#181D1F]">Quayle Applications</p>
              <p className="text-sm text-[#6B7280]">Aug 2022 - Present</p>
              <p className="text-[#6B7280] mt-3 leading-relaxed">
                Led development of cloud-native microservices architecture serving 100K+ users. 
                Mentored team of 5 junior developers, improving code quality and delivery speed by 40%. 
                Implemented CI/CD pipelines reducing deployment time from hours to minutes. Architected 
                scalable solutions using AWS, Docker, and Kubernetes.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-[#87B1C1]/30 pb-8">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#87B1C1] rounded-sm rotate-45" />
            <div className="space-y-2">
              <h3 className="text-[#87B1C1]">Full-Stack Developer</h3>
              <p className="text-[#181D1F]">TechStart Solutions</p>
              <p className="text-sm text-[#6B7280]">May 2019 - Aug 2022</p>
              <p className="text-[#6B7280] mt-3 leading-relaxed">
                Built responsive web applications using React, Node.js, and PostgreSQL. Optimized 
                database queries reducing page load times by 60%. Collaborated with UX team to implement 
                accessible, user-friendly interfaces. Participated in code reviews and architectural decisions.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-[#87B1C1]/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#87B1C1] rounded-sm rotate-45" />
            <div className="space-y-2">
              <h3 className="text-[#87B1C1]">Junior Developer</h3>
              <p className="text-[#181D1F]">Digital Innovations Inc</p>
              <p className="text-sm text-[#6B7280]">May 2017 - May 2019</p>
              <p className="text-[#6B7280] mt-3 leading-relaxed">
                Developed and maintained RESTful APIs for mobile and web applications. Participated in 
                Agile development process with bi-weekly sprints. Contributed to open-source projects 
                and internal documentation. Gained expertise in modern JavaScript frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      {/* Research & Publications */}
      <Suspense fallback={<SectionSkeleton />}>
        <ResearchSection />
      </Suspense>

      {/* Datasets */}
      <Suspense fallback={<SectionSkeleton />}>
        <DatasetsSection />
      </Suspense>

      {/* Blog & Writing */}
      <Suspense fallback={<SectionSkeleton />}>
        <BlogSection />
      </Suspense>

      {/* Education */}
      <section id="cv">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-[#87B1C1]" />
          <h2 className="text-[#181D1F]">Education</h2>
        </div>
        
        <div className="space-y-6">
          <div className="relative pl-8 border-l-2 border-[#87B1C1]/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#87B1C1] rounded-sm rotate-45" />
            <div className="space-y-2">
              <h3 className="text-[#87B1C1]">Bachelor of Science in Computer Science</h3>
              <p className="text-[#181D1F]">University of California, Berkeley</p>
              <p className="text-sm text-[#6B7280]">Sep 2013 - May 2017</p>
              <p className="text-[#6B7280] mt-2">
                GPA: 3.8/4.0 • Dean's List • Focus on Software Engineering and Algorithms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Certifications */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-[#87B1C1]" />
          <h2 className="text-[#181D1F]">Awards & Certifications</h2>
        </div>
        
        <div className="space-y-6">
          <div className="relative pl-8 border-l-2 border-[#87B1C1]/30 pb-6">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#87B1C1] rounded-sm rotate-45" />
            <div className="space-y-2">
              <h3 className="text-[#87B1C1]">AWS Certified Solutions Architect</h3>
              <p className="text-sm text-[#6B7280]">Amazon Web Services • 2021</p>
              <p className="text-[#6B7280] mt-2">
                Professional certification demonstrating expertise in designing distributed systems 
                on AWS. Validated skills in high-availability, cost-efficient, and fault-tolerant systems.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-[#87B1C1]/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#87B1C1] rounded-sm rotate-45" />
            <div className="space-y-2">
              <h3 className="text-[#87B1C1]">Professional Scrum Master I</h3>
              <p className="text-sm text-[#6B7280]">Scrum.org • 2020</p>
              <p className="text-[#6B7280] mt-2">
                Certification in Scrum framework and agile principles. Demonstrated understanding 
                of Scrum theory and practices to lead teams effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}

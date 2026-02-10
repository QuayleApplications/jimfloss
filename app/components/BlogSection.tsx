import { BookText, ExternalLink, Calendar } from 'lucide-react';

export function BlogSection() {
  const posts = [
    {
      title: 'Building Scalable ML Pipelines with Modern Cloud Infrastructure',
      excerpt: 'A deep dive into architecting production-ready machine learning pipelines using containerization, orchestration, and serverless computing patterns.',
      date: 'October 5, 2025',
      readTime: '8 min read',
      tags: ['Machine Learning', 'Cloud Architecture', 'DevOps'],
      platform: 'Medium',
      url: '#'
    },
    {
      title: 'From PhD Research to Production: Bridging the Gap',
      excerpt: 'Lessons learned from translating academic optimization algorithms into real-world software systems that serve millions of users.',
      date: 'September 22, 2025',
      readTime: '6 min read',
      tags: ['Research', 'Software Engineering', 'AI'],
      platform: 'Dev.to',
      url: '#'
    },
    {
      title: 'The Art of Reproducible Research in Data Science',
      excerpt: 'Best practices for creating reproducible research environments, from version control to containerization and experiment tracking.',
      date: 'September 10, 2025',
      readTime: '10 min read',
      tags: ['Data Science', 'Research', 'Best Practices'],
      platform: 'Medium',
      url: '#'
    },
    {
      title: 'Optimizing Real-Time Analytics: A Case Study',
      excerpt: 'How we reduced query latency by 85% using distributed caching, query optimization, and strategic data partitioning.',
      date: 'August 28, 2025',
      readTime: '7 min read',
      tags: ['Analytics', 'Performance', 'Optimization'],
      platform: 'Substack',
      url: '#'
    }
  ];

  return (
    <section id="blog" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <BookText className="w-6 h-6 text-[#87B1C1]" />
        <h2 className="text-[#181D1F]">Blog & Writing</h2>
      </div>

      <div className="mb-6 bg-[#F5F5F5] p-6 rounded-sm border border-[#87B1C1]/10">
        <p className="text-[#6B7280] leading-relaxed">
          Technical writing on data science, software engineering, research methodologies, and the 
          intersection of academia and industry. Published on Medium, Dev.to, and Substack.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="bg-white p-6 rounded-sm border border-[#87B1C1]/10 hover:border-[#87B1C1]/30 transition-colors group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-[#87B1C1] mb-2 group-hover:underline">
                    {post.title}
                  </h3>
                </a>
                <p className="text-[#6B7280] leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.platform}</span>
                </div>
              </div>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-[#6B7280] hover:text-[#87B1C1] transition-colors"
                aria-label="Read article"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-[#F5F5F5] text-[#181D1F] text-sm rounded-sm border border-[#87B1C1]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

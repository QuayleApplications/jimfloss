import { BookOpen, ExternalLink, FileText } from 'lucide-react';

export function ResearchSection() {
  const publications = [
    {
      title: 'Optimization Algorithms for Large-Scale Distributed Systems',
      journal: 'Journal of Computer Science',
      year: '2024',
      authors: 'Quayle, J., et al.',
      status: 'Published',
      doi: '10.1000/example.2024',
      links: {
        paper: '#',
        code: '#',
        dataset: '#'
      }
    },
    {
      title: 'Machine Learning Approaches to Predictive Maintenance',
      journal: 'International Conference on AI',
      year: '2023',
      authors: 'Quayle, J., Smith, A.',
      status: 'Conference Proceedings',
      doi: '10.1000/example.2023',
      links: {
        paper: '#',
        code: '#'
      }
    },
    {
      title: 'Real-Time Data Analytics in Cloud Environments',
      journal: 'arXiv Preprint',
      year: '2023',
      authors: 'Quayle, J.',
      status: 'Preprint',
      arxiv: 'arXiv:2023.12345',
      links: {
        paper: '#',
        code: '#'
      }
    }
  ];

  return (
    <section id="research" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-6 h-6 text-[#87B1C1]" />
        <h2 className="text-[#181D1F]">Research & Publications</h2>
      </div>

      <div className="mb-6 bg-[#F5F5F5] p-6 rounded-sm border border-[#87B1C1]/10">
        <p className="text-[#6B7280] leading-relaxed">
          PhD research focused on optimization algorithms, distributed systems, and machine learning 
          applications. Published in peer-reviewed journals and conferences with open-source code and 
          reproducible datasets.
        </p>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white p-6 rounded-sm border border-[#87B1C1]/10 hover:border-[#87B1C1]/30 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <h3 className="text-[#87B1C1] mb-2">{pub.title}</h3>
                <p className="text-sm text-[#181D1F] mb-1">{pub.authors}</p>
                <p className="text-sm text-[#6B7280]">
                  {pub.journal} • {pub.year} • {pub.status}
                </p>
                {pub.doi && (
                  <p className="text-xs text-[#6B7280] mt-1">DOI: {pub.doi}</p>
                )}
                {pub.arxiv && (
                  <p className="text-xs text-[#6B7280] mt-1">{pub.arxiv}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {pub.links.paper && (
                <a
                  href={pub.links.paper}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#87B1C1] text-white text-sm rounded-sm hover:bg-[#6a8fa0] transition-colors"
                >
                  <FileText className="w-3 h-3" />
                  View Paper
                </a>
              )}
              {pub.links.code && (
                <a
                  href={pub.links.code}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-[#87B1C1]/20 text-[#181D1F] text-sm rounded-sm hover:border-[#87B1C1]/40 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Code
                </a>
              )}
              {pub.links.dataset && (
                <a
                  href={pub.links.dataset}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-[#87B1C1]/20 text-[#181D1F] text-sm rounded-sm hover:border-[#87B1C1]/40 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Dataset
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        <div className="bg-[#87B1C1]/5 p-6 rounded-sm border border-[#87B1C1]/10 text-center">
          <div className="text-2xl text-[#87B1C1] mb-2">12+</div>
          <p className="text-sm text-[#6B7280]">Publications</p>
        </div>
        <div className="bg-[#87B1C1]/5 p-6 rounded-sm border border-[#87B1C1]/10 text-center">
          <div className="text-2xl text-[#87B1C1] mb-2">150+</div>
          <p className="text-sm text-[#6B7280]">Citations</p>
        </div>
        <div className="bg-[#87B1C1]/5 p-6 rounded-sm border border-[#87B1C1]/10 text-center">
          <div className="text-2xl text-[#87B1C1] mb-2">3.5</div>
          <p className="text-sm text-[#6B7280]">h-index</p>
        </div>
      </div>
    </section>
  );
}

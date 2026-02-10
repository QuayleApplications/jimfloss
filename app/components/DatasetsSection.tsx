import { Database, Download, ExternalLink } from 'lucide-react';

export function DatasetsSection() {
  const datasets = [
    {
      title: 'Distributed Systems Performance Metrics',
      description: 'Comprehensive dataset of performance metrics from large-scale distributed computing environments, including latency, throughput, and resource utilization data from 500+ nodes over 6 months.',
      size: '2.3 GB',
      format: 'CSV, Parquet',
      license: 'CC BY 4.0',
      downloads: '1.2K',
      citations: 15,
      platforms: [
        { name: 'Zenodo', url: '#', doi: '10.5281/zenodo.123456' },
        { name: 'Kaggle', url: '#' },
        { name: 'Hugging Face', url: '#' }
      ]
    },
    {
      title: 'Machine Learning Model Training Dataset',
      description: 'Labeled dataset for predictive maintenance in industrial systems. Contains sensor readings, failure modes, and maintenance records from manufacturing equipment.',
      size: '850 MB',
      format: 'JSON, HDF5',
      license: 'MIT',
      downloads: '3.5K',
      citations: 28,
      platforms: [
        { name: 'Kaggle', url: '#' },
        { name: 'Hugging Face', url: '#' },
        { name: 'GitHub', url: '#' }
      ]
    },
    {
      title: 'Real-Time Analytics Benchmark Suite',
      description: 'Benchmark dataset for evaluating real-time data processing systems. Includes streaming data patterns, query workloads, and performance baselines.',
      size: '1.5 GB',
      format: 'Apache Parquet',
      license: 'Apache 2.0',
      downloads: '890',
      citations: 7,
      platforms: [
        { name: 'Zenodo', url: '#', doi: '10.5281/zenodo.789012' },
        { name: 'Figshare', url: '#' }
      ]
    }
  ];

  return (
    <section id="datasets" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <Database className="w-6 h-6 text-[#87B1C1]" />
        <h2 className="text-[#181D1F]">Open Datasets</h2>
      </div>

      <div className="mb-6 bg-[#F5F5F5] p-6 rounded-sm border border-[#87B1C1]/10">
        <p className="text-[#6B7280] leading-relaxed">
          Open-source datasets published with DOIs for reproducibility and research collaboration. 
          All datasets include comprehensive documentation, data dictionaries, and example code.
        </p>
      </div>

      <div className="space-y-6">
        {datasets.map((dataset, index) => (
          <div key={index} className="bg-white p-6 rounded-sm border border-[#87B1C1]/10 hover:border-[#87B1C1]/30 transition-colors">
            <h3 className="text-[#87B1C1] mb-3">{dataset.title}</h3>
            
            <p className="text-[#6B7280] leading-relaxed mb-4">
              {dataset.description}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280]">Size:</span>
                <span className="text-[#181D1F]">{dataset.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280]">Format:</span>
                <span className="text-[#181D1F]">{dataset.format}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280]">License:</span>
                <span className="text-[#181D1F]">{dataset.license}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280]">Downloads:</span>
                <span className="text-[#181D1F]">{dataset.downloads}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280]">Citations:</span>
                <span className="text-[#181D1F]">{dataset.citations}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {dataset.platforms.map((platform, pIndex) => (
                <a
                  key={pIndex}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-[#87B1C1]/20 text-[#181D1F] text-sm rounded-sm hover:border-[#87B1C1]/40 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  {platform.name}
                  {platform.doi && (
                    <span className="text-xs text-[#6B7280] ml-1">
                      (DOI: {platform.doi})
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Calendar, ExternalLink, FileText, Newspaper } from 'lucide-react';

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: "AMSI and AMC Sign Historic Partnership Agreement",
      date: "2020-12-15",
      summary: "Asset Management Society, India and Asset Management Council, Australia sign historic partnership agreement to enhance collaboration in asset management practices.",
      link: "#",
      category: "Partnership"
    },
    {
      id: 2,
      title: "ICMIAM2020 Conference Successfully Concludes",
      date: "2020-11-20",
      summary: "International Conference in Maintenance and Intelligent Asset Management concludes with panel discussion on AMSI formation and future initiatives.",
      link: "#",
      category: "Conference"
    },
    {
      id: 3,
      title: "AMSI Launches New Workshop Series for 2021",
      date: "2020-10-10",
      summary: "Asset Management Society, India announces comprehensive workshop series covering digital transformation and advanced asset management strategies.",
      link: "#",
      category: "Workshops"
    },
    {
      id: 4,
      title: "Defence Industry MRO Workshop in Hyderabad",
      date: "2019-09-15",
      summary: "Lt Gen Dr. Anil Kapoor presents prognosis on MRO opportunities in Indian Defence Industry for global impact.",
      link: "#",
      category: "Workshop"
    }
  ];

  const mediaCoverage = [
    {
      id: 1,
      title: "Asset Management Practices Gain Momentum in India",
      source: "Economic Times",
      date: "2020-12-01",
      summary: "Coverage of AMSI's initiatives and their impact on asset management practices in India.",
      link: "#"
    },
    {
      id: 2,
      title: "International Collaboration in Asset Management",
      source: "Business Standard",
      date: "2020-11-25",
      summary: "Article highlighting the partnership between AMSI and international organizations.",
      link: "#"
    },
    {
      id: 3,
      title: "Digital Transformation in Asset Management",
      source: "Mint",
      date: "2020-10-20",
      summary: "Coverage of AMSI's digital transformation initiatives and workshops.",
      link: "#"
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Asset Management Best Practices in India",
      authors: "Dr. Raghuvir Pai, Dr. Gopinath Chattopadyay",
      journal: "International Journal of Asset Management",
      year: "2020",
      link: "#"
    },
    {
      id: 2,
      title: "Maintenance and Reliability Engineering: A Comprehensive Guide",
      authors: "Prof. Anne Gibbs, Dr. Raghuvir Pai",
      journal: "Asset Management Review",
      year: "2019",
      link: "#"
    },
    {
      id: 3,
      title: "Digital Transformation in Asset Management",
      authors: "AMSI Research Team",
      journal: "Journal of Maintenance Engineering",
      year: "2021",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, press releases, and media coverage 
            about AMSI&apos;s activities and achievements.
          </p>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release) => (
              <div key={release.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {release.category}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{new Date(release.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.summary}</p>
                <a
                  href={release.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaCoverage.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Newspaper className="text-blue-600 mr-2" size={20} />
                  <span className="text-sm font-medium text-gray-500">{article.source}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                  <a
                    href={article.link}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {publications.map((publication) => (
                <div key={publication.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
                      <p className="text-gray-600 mb-2">By {publication.authors}</p>
                      <p className="text-gray-500 text-sm">
                        {publication.journal} • {publication.year}
                      </p>
                    </div>
                    <a
                      href={publication.link}
                      className="ml-4 flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <FileText size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Kit */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Media Kit</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Download our media kit containing logos, high-resolution images, 
            and press materials for media use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Download Media Kit
              <FileText className="ml-2" size={20} />
            </button>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Media Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
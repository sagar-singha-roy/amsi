"use client";

import { Calendar, FileText, ExternalLink, Newspaper } from "lucide-react";

export default function PressSection() {
  const newsItems = [
    {
      id: 1,
      title:
        "First Global Maintenance Day celebrated by Asset Management Society India (AMSI)",
      date: "2023-06-09",
      summary:
        "Asset Management Society, India celebrated the inaugural Global Maintenance Day to promote and celebrate the value of maintenance in our lives. The event featured distinguished guests and focused on sustainability, Atmanirbhar Bharat, and the global MRO footprint.",
      details: [
        "Maintenance has become an enabler, a key word for sustainability requirement to reduce the carbon footprint.",
        "Chief Guest Col Rudra Kumar Jadeja (MD and CEO KRAS Kalyani Group) spoke about harnessing the global MRO footprint and technology as an enabler.",
        "Prof Raghuvir Pai (President AMSI) emphasized human factors and upskilling in the era of intelligent assets.",
        "Presentations by Lt Gen Anil Kapoor on 'Humanising Assets-Future Technology and MRO Perspective'.",
        "Panel discussion on 'Atmanirbhar Bharat- Harnessing the Global MRO Footprint' moderated by Lt Gen Kapoor.",
      ],
      category: "Latest News",
      link: "https://www.amsi.net.in/press/",
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Asset Management Best Practices in India",
      authors: "Dr. Raghuvir Pai, Dr. Gopinath Chattopadyay",
      journal: "International Journal of Asset Management",
      year: "2020",
      link: "#",
    },
    {
      id: 2,
      title: "Maintenance and Reliability Engineering: A Comprehensive Guide",
      authors: "Prof. Anne Gibbs, Dr. Raghuvir Pai",
      journal: "Asset Management Review",
      year: "2019",
      link: "#",
    },
    {
      id: 3,
      title: "Digital Transformation in Asset Management",
      authors: "AMSI Research Team",
      journal: "Journal of Maintenance Engineering",
      year: "2021",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, press releases, and media
            coverage about AMSI&apos;s activities and achievements.
          </p>
        </div>

        {/* Latest News Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="space-y-8">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-semibold uppercase tracking-wider">
                      {news.category}
                    </span>
                    <div className="flex items-center text-gray-500 font-medium">
                      <Calendar size={18} className="mr-2" />
                      <span>
                        {new Date(news.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {news.title}
                  </h3>

                  <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                    {news.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {news.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-gray-100">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Read Full Article
                      <ExternalLink className="ml-2" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
            Publications
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="space-y-8">
              {publications.map((publication) => (
                <div
                  key={publication.id}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-transparent hover:border-blue-100"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600 mb-2 font-medium">
                      By {publication.authors}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Newspaper size={16} className="mr-2 text-blue-500" />
                      <span>{publication.journal}</span>
                      <span className="mx-2 font-bold">•</span>
                      <span className="font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                        {publication.year}
                      </span>
                    </div>
                  </div>
                  <a
                    href={publication.link}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-100"
                  >
                    <FileText size={24} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Kit Section */}
        {/* <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">AMSI Media Kit</h3>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Download high-resolution assets, logos, and official materials for
              media use.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center px-10 py-4 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl">
                Download Assets
                <FileText className="ml-3" size={22} />
              </button>
              <button className="inline-flex items-center px-10 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200">
                Contact Media Relations
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

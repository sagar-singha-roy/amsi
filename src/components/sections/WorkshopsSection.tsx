"use client";

import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight, BookOpen } from "lucide-react";

const WorkshopsSection = () => {
  const webinars = [
    {
      id: 1,
      title: "Engineering Asset Management's Digital Evolution",
      date: "2024-08-01",
      location: "Online Webinar",
      type: "Virtual",
      description:
        "This presentation delves into the integration of digital technologies in engineering asset management, highlighting the benefits of enhanced efficiency and predictive maintenance, while also addressing the complex challenges related to technological, business, and governance shifts.",
      downloadUrl:
        "https://www.amsi.net.in/amsi-data/uploads/2024/08/Webinar-youtube-links.pdf",
    },
  ];

  const workshops = [
    {
      id: 1,
      title:
        "Issues and Challenges of Battery Asset Management for Operational Safety Virtual Roundtable",
      date: "2024-09-30",
      location: "Virtual Roundtable",
      type: "Virtual",
      description:
        'The virtual roundtable event, "Issues and Challenges of Battery Asset Management for Operational Safety," held on 30 September 2024, was attended by 207 delegates and was an outstanding success.',
      downloadUrl:
        "https://www.amsi.net.in/amsi-data/uploads/2024/10/Roundtable-online-event-on-issues-and-challenges-of-battery-assets.pdf",
    },
    {
      id: 2,
      title: "Workshop on Asset Management Fundamentals",
      date: "2022-11-01",
      location: "Online",
      type: "Virtual",
      description:
        "Better Asset Management results in enhanced planning, coordination, communication, competency and decision making for infrastructure organisations. Improving these areas leads to an enhanced bottom line as cost and risk are reduced.",
      downloadUrl:
        "https://www.amsi.net.in/amsi-data/uploads/2022/11/Asset-Management-Fundamentals.pdf",
    },
    {
      id: 3,
      title:
        "Third International Conference on Maintenance and Intelligent Asset Management",
      date: "2022-12-15",
      location: "Conference",
      type: "Hybrid",
      description:
        "The international Conference on Maintenance and Intelligent Asset Management(ICMIAM) is a conference series that began in the year 2020.",
      downloadUrl:
        "https://www.amsi.net.in/amsi-data/uploads/2022/07/ICMIAM-2022-Brochure..pdf",
    },
    {
      id: 4,
      title:
        "One day workshop on leveraging asset management for operational excellence",
      date: "2022-06-01",
      location: "Online Workshop",
      type: "Virtual",
      description:
        "Careful planning and utilisation of physical assets such as, plant and equipment, property, facilities and other resources in an organization that constitute the fixed assets of a firm can affect significantly the operational efficiency, costs of goods sold, and delivery of high quality product and services.",
      downloadUrl:
        "https://www.amsi.net.in/amsi-data/uploads/2022/06/Asset-Management-Workshop-June.pdf",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Workshops & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our comprehensive workshops and events designed to enhance your
            asset management knowledge and skills.
          </p>
        </div>

        {/* Webinar Announcements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Webinar Announcements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {item.type}
                  </span>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>

                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-sm font-semibold"
                >
                  Download
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Workshop
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {item.type}
                  </span>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>

                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-sm font-semibold"
                >
                  Download
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Next Workshop?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest workshops and events. Join our
            community of asset management professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Become a Member
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;

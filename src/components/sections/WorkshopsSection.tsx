"use client";

import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight, BookOpen } from "lucide-react";

const WorkshopsSection = () => {
  const upcomingWorkshops = [
    {
      id: 1,
      title: "Advanced Asset Management Strategies",
      date: "2024-03-15",
      location: "IIT Kharagpur",
      participants: 50,
      type: "In-Person",
      description:
        "Learn advanced strategies for optimizing asset lifecycle management and maintenance planning.",
      instructor: "Dr. Raghuvir Pai",
    },
    {
      id: 2,
      title: "Digital Transformation in Asset Management",
      date: "2024-04-20",
      location: "Online",
      participants: 100,
      type: "Virtual",
      description:
        "Explore how digital technologies are revolutionizing asset management practices.",
      instructor: "Dr. Gopinath Chattopadyay",
    },
    {
      id: 3,
      title: "Maintenance and Reliability Engineering",
      date: "2024-05-10",
      location: "Manipal Academy",
      participants: 75,
      type: "Hybrid",
      description:
        "Comprehensive workshop on maintenance strategies and reliability engineering principles.",
      instructor: "Prof. Anne Gibbs",
    },
  ];

  const pastWorkshops = [
    {
      title: "ICMIAM2020 - International Conference",
      year: "2020",
      location: "Hybrid",
      participants: 200,
      description:
        "Panel discussion on AMSI formation with delegates from India, Australia, Sweden, UK, and New Zealand.",
    },
    {
      title: "Asset Management Summer School",
      year: "2019",
      location: "IIT Kharagpur",
      participants: 150,
      description:
        "Intensive summer program covering fundamentals of asset management.",
    },
    {
      title: "MRO Opportunities Workshop",
      year: "2019",
      location: "Hyderabad",
      participants: 100,
      description:
        "Workshop on Maintenance, Repair, and Operations opportunities in Indian Defence Industry.",
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
            asset management knowledge and skills through hands-on learning and
            expert guidance.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Workshops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        workshop.type === "In-Person"
                          ? "bg-blue-100 text-blue-800"
                          : workshop.type === "Virtual"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {workshop.type}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Users size={16} className="mr-1" />
                      <span className="text-sm">{workshop.participants}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {workshop.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      {/* <span className="text-sm">{new Date(workshop.date).toLocaleDateString()}</span> */}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{workshop.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <BookOpen size={16} className="mr-2" />
                      <span className="text-sm">
                        Instructor: {workshop.instructor}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    Register Now
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Workshops */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Past Workshops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWorkshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">
                    {workshop.year}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Users size={16} className="mr-1" />
                    <span className="text-sm">{workshop.participants}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {workshop.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {workshop.description}
                </p>
                <div className="flex items-center text-gray-500">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{workshop.location}</span>
                </div>
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
              href="/workshops"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              View All Workshops
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;

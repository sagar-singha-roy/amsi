"use client";

import { useState } from "react";
import {
  Play,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("images");

  const images = [
    {
      id: 1,
      src: "https://www.amsi.net.in/amsi-data/uploads/2023/12/1.jpeg",
      alt: "ICMIAM2020 Conference",
      title: "ICMIAM2020 International Conference",
      date: "2020",
      location: "Hybrid Event",
      description:
        "Panel discussion on AMSI formation with international delegates",
    },
    {
      id: 2,
      src: "/images/2.jpeg",
      alt: "AMSI-AMC Agreement Signing",
      title: "AMSI-AMC Agreement Signing",
      date: "2020",
      location: "Australia",
      description:
        "Signing of affiliation agreement between AMSI and Asset Management Council Australia",
    },
    {
      id: 3,
      src: "https://www.amsi.net.in/amsi-data/uploads/2023/12/11.jpeg",
      alt: "Workshop at IIT Kharagpur",
      title: "Asset Management Workshop",
      date: "2019",
      location: "IIT Kharagpur",
      description: "Summer school workshop on asset management fundamentals",
    },
    {
      id: 4,
      src: "https://www.amsi.net.in/amsi-data/uploads/2023/12/23.jpeg",
      alt: "Manipal Workshop",
      title: "Manipal Workshop 2020",
      date: "2020",
      location: "Manipal Academy",
      description: "Joint workshop organized with Federation University",
    },
    {
      id: 5,
      src: "/images/2.jpeg",
      alt: "Hyderabad Conference",
      title: "Hyderabad Conference 2019",
      date: "2019",
      location: "Hyderabad",
      description: "Conference and workshops in Hyderabad",
    },
    {
      id: 6,
      src: "https://www.amsi.net.in/amsi-data/uploads/2023/12/10.jpeg",
      alt: "Gippsland Workshop",
      title: "Gippsland Workshop",
      date: "2018",
      location: "Gippsland, Australia",
      description: "Joint workshop organized by Federation University and AMC",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "AMSI Introduction Video",
      description:
        "Learn about the Asset Management Society, India and our mission",
      duration: "3:45",
      thumbnail: "/images/v0.jpg",
      views: "1.2K",
    },
    {
      id: 2,
      title: "ICMIAM2020 Highlights",
      description:
        "Highlights from the International Conference in Maintenance and Intelligent Asset Management",
      duration: "5:30",
      thumbnail: "/images/v1.jpg",
      views: "856",
    },
    {
      id: 3,
      title: "Workshop Series Introduction",
      description: "Introduction to our comprehensive workshop series",
      duration: "2:15",
      thumbnail: "/images/v2.jpg",
      views: "642",
    },
    {
      id: 4,
      title: "Member Testimonials",
      description: "Hear from our members about their AMSI experience",
      duration: "4:20",
      thumbnail: "/images/v3.jpg",
      views: "1.1K",
    },
  ];

  const events = [
    {
      id: 1,
      title: "ICMIAM2021 - Hybrid Conference",
      date: "2021",
      location: "Federation University, Ballarat",
      description:
        "International Conference in Maintenance and Intelligent Asset Management organized in hybrid mode",
      image: "https://www.amsi.net.in/amsi-data/uploads/2023/12/2.jpeg",
    },
    {
      id: 2,
      title: "COVID-19 Webinar Series",
      date: "2020-2021",
      location: "Online",
      description:
        "Series of webinars addressing asset management challenges during COVID-19",
      image: "/images/2.jpeg",
    },
    {
      id: 3,
      title: "Defence Industry MRO Workshop",
      date: "2019",
      location: "Hyderabad",
      description:
        "Workshop on MRO opportunities in Indian Defence Industry by Lt Gen Dr. Anil Kapoor",
      image: "https://www.amsi.net.in/amsi-data/uploads/2023/12/10.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of images, videos, and event highlights from
            AMSI&apos;s journey and activities over the years.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("images")}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === "images"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <ImageIcon className="inline mr-2" size={20} />
              Images
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === "videos"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Play className="inline mr-2" size={20} />
              Videos
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === "events"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Calendar className="inline mr-2" size={20} />
              Events
            </button>
          </div>
        </div>

        {/* Images Tab */}
        {activeTab === "images" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ImageIcon
                      className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                      size={32}
                    />
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{image.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{image.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
                      <Play className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <Users size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Share Your AMSI Experience
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Have photos or videos from AMSI events? Share them with our
              community and help us document our journey together.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Share Content
              <ImageIcon className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

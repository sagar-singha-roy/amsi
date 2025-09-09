"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Users,
  Globe,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Address",
      details:
        "Flat NRB112, DLF Newtown Heights,\n Opp Shapoorji Sukhabrishti,AA 3,\n Newtown, Kolkata West Bengal: 700135",
      // description: "Our main office is located in Manipal",
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      details: "+91-XXX-XXXX-XXXX",
      description: "Call us during business hours",
    },
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: "Email",
      details: "info@amsi.net.in",
      description: "Send us an email anytime",
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "IST (Indian Standard Time)",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Raghuvir Pai",
      title: "President, AMSI",
      email: "president@amsi.net.in",
      image: "/logo/person.png",
    },
    {
      name: "Dr. Gopinath Chattopadyay",
      title: "Chair, International Advisory Committee",
      email: "gopinath@amsi.net.in",
      image: "/logo/person.png",
    },
    {
      name: "Dr. Anne Gibbs",
      title: "CEO, Asset Management Council Australia",
      email: "anne@amc.org.au",
      image: "/logo/person.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for membership inquiries, workshop information,
            or any questions about AMSI. We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {info.details}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                >
                  <Users size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-600 mb-3">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Find Us
          </h3>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps?q=Flat%20NRB112,%20DLF%20Newtown%20Heights,%20Opp%20Shapoorji%20Sukhabrishti,%20AA%203,%20Newtown,%20Kolkata%20West%20Bengal%20700135&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600">
                Interactive map will be displayed here
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Flat NRB112, DLF Newtown Heights, Opp Shapoorji Sukhabrishti,AA
                3, Newtown, Kolkata West Bengal: 700135
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import Link from "next/link";
import { Users, Award, BookOpen, Globe, ArrowRight } from "lucide-react";

const MembershipCTASection = () => {
  const membershipBenefits = [
    {
      icon: <BookOpen className="text-blue-600" size={24} />,
      title: "Exclusive Workshops",
      description:
        "Access to member-only workshops, seminars, and training programs",
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Professional Network",
      description:
        "Connect with industry leaders and asset management professionals",
    },
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "Certification Programs",
      description:
        "Access to professional certification and continuing education programs",
    },
    {
      icon: <Globe className="text-blue-600" size={24} />,
      title: "Global Collaboration",
      description:
        "Participate in international conferences and collaborative projects",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Member Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-blue-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join AMSI?</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Become part of India&apos;s premier asset management community and
            unlock opportunities for professional growth and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Apply for Membership
              <ArrowRight className="ml-2" size={20} />
            </button>
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

export default MembershipCTASection;

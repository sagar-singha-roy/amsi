'use client';

import { Calendar, Users, Globe, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AMSI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Asset Management Society, India (AMSI) journey started in 2014 with a vision 
            to advance asset management practices across India and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
            AMSI&apos;s journey began with asset management workshops and summer schools at IIT Kharagpur, 
            followed by the first one-day Asset Management conference at Ramakrishna Mission Golpark, Kolkata.
              </p>
              <p>
                Our activities have been supported by many organizations including Tata Steel, Coal India, 
                and others. The Asset Management Council (AMC), Australia, has provided outstanding support 
                for collaboration and cooperation in Asset Management.
              </p>
              <p>
                The Endeavour Fellow funding from the Australian government, related to Maintenance and 
                Reliability and Asset Management, supported by Federation University and Manipal Academy 
                of Higher Education in 2018, resulted in joint workshops organized in Gippsland, Australia.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <Award className="mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-4">International Recognition</h4>
                <p className="text-blue-100">
                  AMSI has established strong partnerships with leading asset management 
                  organizations worldwide, including Australia, Sweden, UK, and New Zealand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-blue-600" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">2014</h4>
            <p className="text-gray-600">AMSI journey began with workshops and summer schools</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">2018</h4>
            <p className="text-gray-600">Endeavour Fellow funding and international collaboration</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-purple-600" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">2020</h4>
            <p className="text-gray-600">ICMIAM2020 panel discussion and society formation</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600">Maintaining the highest standards in asset management practices</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600">Fostering partnerships and knowledge sharing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">Embracing new technologies and methodologies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Growth</h4>
              <p className="text-gray-600">Continuous learning and professional development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
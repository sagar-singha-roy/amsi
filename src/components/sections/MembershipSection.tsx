'use client';

import Link from 'next/link';
import { Check, Users, Award, BookOpen, Globe, ArrowRight, Star } from 'lucide-react';

const MembershipSection = () => {
  const membershipFeeStructure = [
    { type: 'Student', fee: 'INR 300 + GST' },
    { type: 'Individual', fee: 'INR 750 + GST' },
    { type: 'Corporate', fee: 'INR 25000 + GST' },
    { type: 'Life', fee: 'INR 5000 + GST' },
    { type: 'Honorary', fee: '-' },
    { type: 'Admission fee', fee: 'INR 100 + GST' },
  ];

  const membershipClasses = [
    {
      title: 'Student Member',
      description: [
        'Any individual who is over the age of 18 years; and an enrolled student at an institution recognised by the executive council, may, with the approval of the executive council, be a Student Member of the Society.',
        'A Student Member shall have the right to attend, be heard and vote at any General body Meeting.'
      ]
    },
    {
      title: 'Individual Member',
      description: [
        'Any individual who is over the age of 18 years.',
        'An Individual Member has a right to attend, be heard at and vote at any General Meeting and the right to stand for elected office.'
      ]
    },
    {
      title: 'Corporate Member',
      description: [
        'Has been established or incorporated in India in accordance the company\'s Act, or is recognised as a foreign Company in India; and',
        'Provides consulting services or products to asset management practitioners or employs asset management practitioners may be a Corporate Member of the Company.',
        'Corporate Members will hold Membership by nominating from time to time a person or persons in that corporation to whom Membership benefits are to apply. It shall be the responsibility of the Corporate Member to advise the executive council from time to time of any change in that nominated person or persons.',
        'A Corporate Member\'s Nominee or Nominees shall have the same rights as an Individual Member.',
        'The number of Nominees to which a Corporate Member is entitled will be determined by the executive council.'
      ]
    },
    {
      title: 'Life Member',
      description: [
        'A Member who has rendered such services to the Society or any recognised profession or group which as resolved by the executive council by Special Resolution would entitle them to the distinction of Life Membership or upon whom the executive council desires to confer, and resolves by Special Resolution, that distinction because of their knowledge and experience in pursuits connected with the profession of asset management, the Society or any other profession or group recognised by the executive council, may be elected by the executive council as a Life Member. The name of the Member shall thereupon be entered in the Register on the Life Membership List according to their status in the Society or such status as the executive council may decide.',
        'A Life Member shall be entitled to all the privileges of Individual Membership without the need for payment of the annual subscription, but a lumpsum amount as the executive council may decide from time to time.',
        'A Life Member has a right to attend, be heard at and vote at any General Body Meeting and the right to stand for elected office.'
      ]
    },
    {
      title: 'Honorary Member',
      description: [
        'The executive council by Special Resolution may admit any person as an Honorary Member (Honoris Causa) of the Society if that person has served the Society in such a way as to entitle them to the distinction or because of their knowledge and experience in asset management or a profession or group recognized by the executive council. The name of the Member shall thereupon be entered in the Register on the Honorary Membership List according to their status in Society. An Honorary Member shall not be entitled to hold any office or become a Member of either the executive council or a Chapter Committee.',
        'The Honorary Membership List shall comprise the names of those persons on whom honorary Membership has been conferred by the Society.',
        'An Honorary Member has a right to attend and be heard at any General Body Meeting but shall not have the right to vote or stand for elected office.'
      ]
    },
  ];

  const membershipBenefits = [
    {
      icon: <BookOpen className="text-blue-600" size={24} />,
      title: "Exclusive Workshops",
      description: "Access to member-only workshops, seminars, and training programs"
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: "Professional Network",
      description: "Connect with industry leaders and asset management professionals"
    },
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "Certification Programs",
      description: "Access to professional certification and continuing education programs"
    },
    {
      icon: <Globe className="text-blue-600" size={24} />,
      title: "Global Collaboration",
      description: "Participate in international conferences and collaborative projects"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">AMSI Membership</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Join the Asset Management Society, India and become part of a growing community 
            of professionals dedicated to advancing asset management practices.
          </p>
        </div>

        {/* Fee Structure */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Membership Fee Structure</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Member Type</th>
                  <th className="py-4 px-6 text-left">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                {membershipFeeStructure.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                    <td className="py-4 px-6 text-blue-800 font-medium">{item.type}</td>
                    <td className="py-4 px-6 text-blue-800">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Classes of Membership */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">Classes of Membership</h3>
          <p className="text-blue-700 text-center mb-8">
            There will be the following classes of Members: Student member, Individual member, Corporate member, Life, Honorary, 
            or such other class as may be determined from time to time by the Society. The class to which a Member belongs is herein referred to as their status.
          </p>
          
          <div className="space-y-8">
            {membershipClasses.map((memberClass, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
                <h4 className="text-2xl font-bold text-blue-800 mb-4">{memberClass.title}</h4>
                <div className="space-y-4">
                  {memberClass.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-blue-700">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">Evidence of Qualification for Membership</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
            <p className="text-blue-700">
              In respect of any application for Membership or in the event that additional classes of Members are created, 
              the executive council may require the application to be accompanied by such proof, information or evidence 
              demonstrating satisfaction, as the executive council reasonably determines, as to qualification for the type 
              of Membership, in respect of which the application is made.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">Admission to Membership</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
            <p className="text-blue-700">
              Unless otherwise determined by the executive council, the executive council or their nominated delegate 
              shall admit or reject the application in accordance with any guidelines determined by the executive council.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Member Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-800 mb-3">{benefit.title}</h4>
                <p className="text-blue-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join AMSI?</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Become part of India&apos;s premier asset management community and unlock opportunities 
            for professional growth and collaboration.
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

export default MembershipSection;
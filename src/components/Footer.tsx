import Link from "next/link";
import { Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              {/* <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AMSI</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold">Asset Management Society</h3>
                <p className="text-sm text-gray-400">India</p>
              </div> */}
              <div className="rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/logo/logo.jpg"
                  alt="AMSI Logo"
                  className="h-full w-full"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A membership-based, not-for-profit organization dedicated to
              enhancing asset management practices and fostering collaboration
              in India and globally.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">
                  Newtown, Kolkata West Bengal: 700135
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">+91-XXX-XXXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">info@amsi.net.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Asset Management Society, India. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

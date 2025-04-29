import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top section: Logo, text, icons */}
        <div className="flex flex-col items-center space-y-4">
          <img src="/Logo.png" alt="Logo" className="h-10" />
          <p className="text-center text-gray-500 max-w-xl">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div className="flex space-x-5 text-gray-600">
            {/* Phone Call */}
            <a
              href="tel:+917305781227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt className="hover:text-green-600 cursor-pointer" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917305781227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            </a>

            {/* Email */}
            <a
              href="mailto:stairecosytem@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-red-500 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Bottom section: Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-600 justify-center">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Solutions</h4>
            <ul className="space-y-1">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Automation</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Solar Products</li>
              <li>CCTV Supports</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Products</li>
              <li>Home</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

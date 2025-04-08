import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

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
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaGithub className="hover:text-gray-900 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
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
              <li>Submit ticket</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
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

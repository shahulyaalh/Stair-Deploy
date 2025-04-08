import { useState } from "react";
import { Link } from "react-router-dom";
import { LampDemo } from "../ui/lamp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Company Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/Logo.png"
            alt="Stair Ecosystem"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-blue-700">
            Stair Ecosystem Private Limited
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            About
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Products
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Login Button (Desktop) */}
        <Link
          to="/admin-login"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col items-center space-y-4 py-5">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              About
            </Link>
            <Link
              to="/products"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Products
            </Link>
            <Link
              to="/gallery"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/admin-login"
              onClick={handleLinkClick}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

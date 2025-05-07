import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/Logo.png"
            alt="Stair Ecosystem"
            className="w-20 h-20 object-contain ml-1 md:w-23 md:h-23" // 👈 Adjusted size & position for mobile
          />

          <div className="hidden md:flex flex-col items-center text-center">
            <span
              className="text-4xl font-black uppercase tracking-wide"
              style={{
                color: "#0074D9", // Solid blue fill (or any color your client prefers)
                WebkitTextStroke: "2px rgb(221, 219, 248)", // White outline (thicker for visibility)
                fontFamily: "'Arial Black', Arial, sans-serif",
                letterSpacing: "2px",
              }}
            >
              STAIR ECOSYSTEM PVT. LTD.
            </span>
            <span className="text-gray-700 justify-center font-medium text-sm mt-1">
              CIN: U80200TN2025PTC179412
            </span>
          </div>

          {/* Centered Text in Mobile */}
          <div className="ml-8 absolute left-1/2 transform -translate-x-1/2 md:hidden">
            <div className="flex flex-col items-center -mt-1">
              <span
                className="text-3xl font-bold"
                style={{
                  color: "#0074D9", // Solid blue fill (or any color your client prefers)
                  WebkitTextStroke: "2px rgb(221, 219, 248)", // White outline (thicker for visibility)
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  letterSpacing: "2px",
                }}
              >
                STAIR ECOSYSTEM
              </span>
              <span className="text-gray-700 font-medium text-sm mt-1">
                CIN: U80200TN2025PTC179412
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10 text-2lg">
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
            to="/service"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Services
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
        <div className="md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out">
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
              to="/service"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Services
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

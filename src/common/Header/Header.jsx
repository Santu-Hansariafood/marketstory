import React, { useState } from "react";
import logo from "../../assets/logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-80 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div
            className="w-12 h-12 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
          >
            <img
              src={logo} // Use the imported logo
              alt="Logo"
              className="h-10 w-20 object-cover rounded"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#welcome" className="text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="#page1" className="text-gray-600 hover:text-blue-500">
            About
          </a>
          <a href="#page2" className="text-gray-600 hover:text-blue-500">
            Services
          </a>
          <a href="#page3" className="text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-blue-500 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li>
              <a
                href="#welcome"
                className="text-gray-600 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#page1"
                className="text-gray-600 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#page2"
                className="text-gray-600 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#page3"
                className="text-gray-600 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

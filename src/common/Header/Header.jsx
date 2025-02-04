import { useState } from "react";
import logo from "../../assets/logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-80 bg-white shadow-md z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#welcome"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#page1"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#page2"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#page3"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none transition-colors duration-300"
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
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li>
              <a
                href="#welcome"
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#page1"
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#page2"
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#page3"
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
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

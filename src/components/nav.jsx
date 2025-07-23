import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-90 shadow-lg p-4 md:p-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-700">Ceylon 4 U</div>

      {/* Hamburger Icon (Mobile View) */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center md:space-x-6 text-gray-700 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <li className="w-full md:w-auto text-center py-2 md:py-0">
          <Link
            to="/"
            className="block md:inline-block hover:text-blue-600 font-bold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="w-full md:w-auto text-center py-2 md:py-0">
          <Link
            to="/destination"
            className="block md:inline-block hover:text-blue-600 font-bold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Destination
          </Link>
        </li>
        <li className="w-full md:w-auto text-center py-2 md:py-0">
          <Link
            to="/about"
            className="block md:inline-block hover:text-blue-600 font-bold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="w-full md:w-auto text-center py-2 md:py-0">
          <Link
            to="/contact"
            className="block md:inline-block hover:text-blue-600 font-bold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

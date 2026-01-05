import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === "/") {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* Top Information Bar */}
      <div className="hidden md:block bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center text-sm">
            {/* Left Section - Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-blue-300" />
                <span>+94 77 123 4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-300" />
                <span>info@ceylon4u.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-300" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

            {/* Right Section - Social/Additional Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-blue-700 px-3 py-1 rounded-full">
                <span className="mr-2">⭐</span>
                <span>Rated 4.8/5 on</span>
                <SiTripadvisor className="ml-2" />
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Explore Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-transparent backdrop-blur-md shadow-lg py-3" 
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            
            {/* Enhanced Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-xl">C4U</span>
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Ceylon 4 U
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wider">
                  DISCOVER THE PEARL OF THE INDIAN OCEAN
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { path: "/", label: "Home" },
                { path: "/destination", label: "Destinations" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block md:inline-block font-bold cursor-pointer transition-colors duration-200 px-2 ${
                    isActive(item.path)
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* CTA Button */}
              {/* <Link
                to="/contact"
                className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-gray-700" />
              ) : (
                <FaBars className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden absolute left-0 right-0 bg-white shadow-2xl rounded-b-2xl transition-all duration-300 transform ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
            style={{ top: "100%" }}
          >
            <div className="p-4 space-y-1">
              {[
                { path: "/", label: "Home" },
                { path: "/destination", label: "Destinations" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact Us" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block p-4 rounded-xl transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.label}</span>
                    {isActive(item.path) && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              {/* <div className="pt-4 mt-2 border-t">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 px-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Book Your Adventure
                </Link>
              </div> */}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t text-sm text-gray-600">
                <div className="flex items-center mb-2">
                  <FaPhoneAlt className="mr-3 text-blue-500" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-3 text-blue-500" />
                  <span>info@ceylon4u.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
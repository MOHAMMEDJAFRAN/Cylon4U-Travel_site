// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 text-center">
      <div className="flex justify-center space-x-6 mb-4">
      <a href="https://www.facebook.com/share/1HJPYpHGpw/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition" />
      </a>

      <a href="https://www.instagram.com/mr__.chocolate.boy?utm_source=qr&igsh=OTdmaTlyY3ptcmc2" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
      </a>

      <a href="https://wa.me/+94767674023" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-500 transition" />
      </a>
      </div>
      <ul className="flex justify-center space-x-6 text-gray-400">
        <li><Link to="/" className="hover:text-white transition">Home</Link></li>
        <li><Link to="/destination" className="hover:text-white transition">Destination</Link></li>
        <li><Link to="/about" className="hover:text-white transition">About</Link></li>
        <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
      </ul>
      <p className="mt-4 text-gray-500">Copy right © 2025 Sri Lanka Explorer | All Rights Reserved</p>
      <p className="mt-4 text-blue-500">Design & Developed by Mohammed Jafran</p>
    </footer>
  );
};

export default Footer;

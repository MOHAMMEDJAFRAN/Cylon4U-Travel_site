import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Send email using EmailJS
    const templateParams = {
      name: name,
      email: email, // Include email address in template parameters
      message: message,
    };

    emailjs
      .send(
        "service_brsr46g", // Replace with your EmailJS service ID
        "template_8oeyyxs", // Replace with your EmailJS template ID
        templateParams,
        "tKMBjfkK10n3qAFpF" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
        },
        (error) => {
          console.error("Error:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-lg shadow-blue-500/50 rounded-lg p-8 w-full max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        {success && (
          <motion.div
            className="bg-green-100 text-green-700 p-3 rounded-lg text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            ✅ Successfully Sent!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.facebook.com/share/1HJPYpHGpw/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:scale-110 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mr__.chocolate.boy?utm_source=qr&igsh=OTdmaTlyY3ptcmc2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl hover:scale-110 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/+94767674023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

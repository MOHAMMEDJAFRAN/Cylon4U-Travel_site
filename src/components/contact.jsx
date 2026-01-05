import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "",
    subject: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: formData.subject || "Contact Form Submission",
      date: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_brsr46g",
        "template_8oeyyxs",
        templateParams,
        "tKMBjfkK10n3qAFpF"
      );
      
      setSuccess(true);
      setFormData({ name: "", email: "", message: "", subject: "" });
      setTouched({});
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      icon: FaFacebook, 
      href: "https://www.facebook.com/share/1HJPYpHGpw/?mibextid=qi2Omg", 
      color: "text-blue-600 hover:text-blue-700",
      bgColor: "bg-blue-100 hover:bg-blue-200",
      label: "Facebook"
    },
    { 
      icon: FaInstagram, 
      href: "https://www.instagram.com/mr__.chocolate.boy?utm_source=qr&igsh=OTdmaTlyY3ptcmc2", 
      color: "text-pink-500 hover:text-pink-600",
      bgColor: "bg-pink-100 hover:bg-pink-200",
      label: "Instagram"
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com", 
      color: "text-sky-400 hover:text-sky-500",
      bgColor: "bg-sky-100 hover:bg-sky-200",
      label: "Twitter"
    },
    { 
      icon: FaWhatsapp, 
      href: "https://wa.me/+94767674023", 
      color: "text-green-500 hover:text-green-600",
      bgColor: "bg-green-100 hover:bg-green-200",
      label: "WhatsApp"
    },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: "support@example.com", color: "text-blue-500" },
    { icon: FaPhone, text: "+94 767 674 023", color: "text-green-500" },
    { icon: FaMapMarkerAlt, text: "123 Street, City, Country", color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br mt-[-80px] from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-full ${info.color} bg-opacity-10`}>
                    <info.icon className={`text-xl ${info.color}`} />
                  </div>
                  <span className="text-gray-700 font-medium">{info.text}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.bgColor} ${social.color} p-3 rounded-xl transition-all duration-300 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">1h</div>
                  <div className="text-sm text-gray-600">Avg Response Time</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <IoMail className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
            </div>

            {/* Status Messages */}
            <div className="mb-6">
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <div>
                    <p className="font-semibold">Message Sent Successfully!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3"
                >
                  <FaTimesCircle className="text-red-500 text-xl" />
                  <div>
                    <p className="font-semibold">Oops! Something went wrong</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-gray-400" />
                      Your Name *
                    </div>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      touched.name && !formData.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-1">
                      <IoMail className="text-gray-400" />
                      Email Address *
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      touched.email && !formData.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  rows="5"
                  className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                    touched.message && !formData.message ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Floating Elements for Decoration */}
        <div className="hidden lg:block">
          <motion.div
            className="absolute top-1/4 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            animate={{
              y: [0, 20, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>
    </div>
  );
}
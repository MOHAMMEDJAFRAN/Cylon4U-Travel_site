import { motion } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation"; // Add this import

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "/Must visting/pasikuda-beach.jpg",
      title: "Pasikudah Beach",
      description: "A stunning stretch of golden sand and crystal-clear waters, Pasikudah Beach is one of the safest swimming beaches in Sri Lanka. The shallow waters extend far into the sea, making it ideal for families and water activities.",
    },
    {
      src: "/Must visting/Coral Reef Snorkeling & Scuba Diving.jpg",
      title: "Coral Reef Snorkeling & Scuba Diving",
      description: "Pasikudah is home to some beautiful coral reefs and rich marine life. Visitors can go snorkeling or scuba diving to explore colorful fish, sea turtles, and exotic coral formations.",
    },
    {
      src: "/Must visting/Whale-and-Dolphing-watch-Trincomalee.jpg",
      title: "Whale and Dolphin Watching",
      description: "During the right season, boat tours from Pasikudah offer a chance to spot dolphins and whales in the deep blue waters of the Indian Ocean.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/Pasikuda.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Pasikudah, Sri Lanka.
          </h1>
          <p className="text-white text-xl font-serif mt-2">
            The Tropical Beach Paradise
          </p>
        </div>
      </motion.div>

      {/* Destination Description */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src="/destinationbg/Pasikudah-Map-Mobile.jpg" 
              alt="Pasikudah" 
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Pasikudah</h2>
              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                Pasikudah, located on the eastern coast of Sri Lanka, is famous for its pristine white sandy beaches, shallow turquoise waters, and luxury resorts. It is one of the best spots for swimming, snorkeling, and water sports, making it a perfect tropical getaway.
              </p>
              <br />
              <a href="https://maps.app.goo.gl/Q8zUPFCb4xE18vjN9" target="_blank" rel="noopener noreferrer">
                <h2 className="text-red-800 font-bold hover:underline">
                  📍 Live on Location
                </h2>
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Must-Visit Places */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-6">Must Visiting Places</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mustVisitPlaces.map((place, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.2}>
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-500 text-justify"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={place.src} 
                  alt={place.title} 
                  className="w-full h-48 object-cover" 
                />
                
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-700">{place.title}</h3>
                  <p className="text-gray-600">{place.description}</p>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
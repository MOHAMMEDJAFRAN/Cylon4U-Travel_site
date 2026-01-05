import { motion } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation"; // Reusable scroll animation

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "/Must visting/Main Surf Point .jpg",
      title: "Main Surf Point",
      description: "One of the best surf spots in the world, offering perfect waves for beginners and professional surfers alike. The surf season runs from April to October.",
    },
    {
      src: "/Must visting/Peanut Farm Beach.jpg",
      title: "Peanut Farm Beach",
      description: "A hidden secluded beach with beautiful golden sands and incredible surf waves. A great spot to relax, surf, and enjoy the sunset.",
    },
    {
      src: "/Must visting/Elephant Rock.jpg",
      title: "Elephant Rock",
      description: "A scenic viewpoint that offers a breathtaking panoramic view of the coastline. It’s also a great place for sunset watching and climbing.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <motion.div
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/arugambey.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Arugam Bay, Sri Lanka
          </h1>
          <p className="text-white text-xl font-serif mt-2">
            The Surfing Paradise of Sri Lanka
          </p>
        </div>
      </motion.div>

      {/* Destination Description */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/destinationbg/arugam-bay-map-500.jpg"
              alt="Arugam Bay"
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Arugam Bay</h2>
              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                Arugam Bay, located on Sri Lanka’s eastern coast, is a world-famous surfing destination known for its laid-back vibe, golden beaches, and vibrant nightlife. This tropical paradise attracts surfers, beach lovers, and adventure seekers from around the world.
              </p>
              <br />
              <a href="https://maps.app.goo.gl/Sc41ap8BT8mTaiT66" target="_blank" rel="noopener noreferrer">
                <h2 className="text-red-800 font-bold hover:underline">📍 Live on Location</h2>
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-500"
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

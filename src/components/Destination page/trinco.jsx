import { motion } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation"; // Add this import

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "/Must visting/Nilaveli_Beach_21.jpg",
      title: "Nilaveli Beach",
      description: "A breathtaking white sandy beach with crystal-clear waters, Nilaveli is perfect for sunbathing, swimming, and diving. It's one of the most beautiful beaches in Sri Lanka.",
    },
    {
      src: "/Must visting/Pigeon-Island-Distant-View.jpg",
      title: "Pigeon Island National Park",
      description: "A protected marine park just off the coast, famous for snorkeling and diving. Swim with colorful coral reefs, turtles, and exotic fish in the turquoise waters.",
    },
    {
      src: "/Must visting/Koneswaram Temple.jpg",
      title: "Koneswaram Temple",
      description: "A sacred Hindu temple dedicated to Lord Shiva, perched on Swami Rock with stunning ocean views. It's one of the most important religious sites in Sri Lanka.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/trinco.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Trincomalee, Sri Lanka.
          </h1>
          <p className="text-white text-xl font-serif mt-2">
            The Jewel of Sri Lanka's East Coast
          </p>
        </div>
      </motion.div>

      {/* Destination Description */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src="/destinationbg/trincomalee-Map-500.jpg" 
              alt="Trincomalee" 
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Trincomalee</h2>
              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                Trincomalee, located on Sri Lanka's northeast coast, is a paradise for beach lovers, history enthusiasts, and nature seekers. Known for its pristine beaches, sacred temples, and one of the world's finest natural harbors, Trincomalee offers a perfect blend of culture, adventure, and relaxation.
              </p>
              <br />
              <a href="https://maps.app.goo.gl/qR3mdpzyoRiYE9VH8" target="_blank" rel="noopener noreferrer">
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
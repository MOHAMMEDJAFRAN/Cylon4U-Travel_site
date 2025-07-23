import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/images/8 arch.jpg",
      title: "Nine Arches Bridge",
      description: "One of Sri Lanka’s most iconic landmarks, the Nine Arches Bridge is a stunning colonial-era railway bridge nestled between tea plantations and dense forest. Watching a train pass over the bridge is a mesmerizing sight!",
    },
    {
      src: "public/Must visting/Ravana_Falls.jpg",
      title: "Ravana Falls",
      description: "A beautiful cascading waterfall located just a short drive from Ella. It’s one of the widest waterfalls in Sri Lanka and has a legendary connection to the Ramayana epic.",
    },
    {
      src: "public/Must visting/Ella Rock.jpg",
      title: "Ella Rock",
      description: "A more challenging hike than Little Adam’s Peak, Ella Rock offers spectacular views of the mist-covered mountains and tea estates. The journey through tea plantations and eucalyptus forests makes it even more special.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/ella.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Ella, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">A Scenic Paradise in Sri Lanka</p>
          </h1>
        </div>
      </motion.div>

      {/* Destination Description */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="public/destinationbg/Ella-Map-500.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ella</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Ella, a picturesque hill town in Sri Lanka, is famous for its breathtaking landscapes, tea plantations, waterfalls, and adventure hikes. Surrounded by misty mountains and lush greenery, this charming destination is perfect for nature lovers and adventure seekers.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/SBXhBwyuA1FyNMV88" target="_blank" rel="noopener noreferrer">
              <h2 className="text-red-800 font-bold hover:underline">
                📍 Live on Location
              </h2>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Must-Visit Places */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-6">Must Visiting Places</h2>
        <div className="grid grid-cols-1 text-justify md:grid-cols-3 gap-6">
          {mustVisitPlaces.map((place, index) => (
            <motion.div 
              key={index}
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
          ))}
        </div>
      </div>
    </div>
  );
}

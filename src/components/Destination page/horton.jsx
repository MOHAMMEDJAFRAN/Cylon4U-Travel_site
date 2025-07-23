import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/World's End .jpg",
      title: "World's End ",
      description: "One of the most famous viewpoints in Sri Lanka! A sheer cliff with a 4,000 ft (1,200 m) drop, offering breathtaking panoramic views of the valley below. Best visited early in the morning before the mist covers the view.",
    },
    {
      src: "public/Must visting/Baker’s Falls.JPG",
      title: "Baker’s Falls",
      description: "A stunning 20-meter waterfall, named after British explorer Samuel Baker. The scenic forest trail leading to the falls is as beautiful as the waterfall itself!",
    },
    {
      src: "public/Must visting/chimney-pool1.jpg",
      title: "Chimney Pool",
      description: "A hidden natural pool within Horton Plains, surrounded by serene landscapes and wildlife. A peaceful spot away from the main trails.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/horton.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Horton Plain, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">A Misty Wonderland of Nature</p>
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
            src="public/destinationbg/horton-map.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Horton Plain</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Horton Plains National Park is a breathtaking highland plateau located in Sri Lanka’s Central Province. Famous for its rolling grasslands, cloud forests, and stunning cliffs, the park is a UNESCO World Heritage Site and a must-visit destination for nature lovers and hikers.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/kQ7WoZshBohTwNVs5" target="_blank" rel="noopener noreferrer">
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

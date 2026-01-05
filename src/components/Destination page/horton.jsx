import { motion } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation"; // Add this import

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "/Must visting/World's End .jpg",
      title: "World's End ",
      description: "One of the most famous viewpoints in Sri Lanka! A sheer cliff with a 4,000 ft (1,200 m) drop, offering breathtaking panoramic views of the valley below. Best visited early in the morning before the mist covers the view.",
    },
    {
      src: "/Must visting/Baker’s Falls.jpg",
      title: "Baker's Falls",
      description: "A stunning 20-meter waterfall, named after British explorer Samuel Baker. The scenic forest trail leading to the falls is as beautiful as the waterfall itself!",
    },
    {
      src: "/Must visting/chimney-pool1.jpg",
      title: "Chimney Pool",
      description: "A hidden natural pool within Horton Plains, surrounded by serene landscapes and wildlife. A peaceful spot away from the main trails.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/horton.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Horton Plain, Sri Lanka.
          </h1>
          <p className="text-white text-xl font-serif mt-2">
            A Misty Wonderland of Nature
          </p>
        </div>
      </motion.div>

      {/* Destination Description */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src="/destinationbg/horton-map.jpg" 
              alt="Horton Plain" 
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Horton Plain</h2>
              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                Horton Plains National Park is a breathtaking highland plateau located in Sri Lanka's Central Province. Famous for its rolling grasslands, cloud forests, and stunning cliffs, the park is a UNESCO World Heritage Site and a must-visit destination for nature lovers and hikers.
              </p>
              <br />
              <a href="https://maps.app.goo.gl/kQ7WoZshBohTwNVs5" target="_blank" rel="noopener noreferrer">
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
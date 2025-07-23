import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/ruwanweliseya.jpg",
      title: "Ruwanwelisaya Stupa",
      description: "One of the most magnificent stupas in Sri Lanka, built by King Dutugemunu in 140 B.C. It is one of the world's tallest stupas, standing at 103 meters high and is a symbol of Buddhist heritage.",
    },
    {
      src: "public/Must visting/Abhayagiriya Monastery.jpg",
      title: "Abhayagiriya Monastery",
      description: "A massive monastic complex, once home to thousands of Buddhist monks. The ruins here showcase ancient Sri Lankan architecture and craftsmanship.",
    },
    {
      src: "public/Must visting/Isurumuniya Temple .jpg",
      title: "Isurumuniya Temple ",
      description: "Famous for its rock carvings, including the famous Lovers' Statue, this temple offers a serene and spiritual experience surrounded by lush greenery.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/anuradhapura.jpeg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Anuradhapura, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Ancient Kingdom of Sri Lanka</p>
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
            src="public/destinationbg/anuradhapura-Map-500.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Anuradhapura</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Anuradhapura, located in northern Sri Lanka, is one of the country’s most sacred and historically rich cities. It was the first capital of Sri Lanka and remains a UNESCO World Heritage Site, famous for its well-preserved ruins, ancient stupas, and Buddhist temples. The city is a major pilgrimage site and a must-visit destination for history lovers and spiritual seekers.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/fR6TGu81mxbS6isL9" target="_blank" rel="noopener noreferrer">
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

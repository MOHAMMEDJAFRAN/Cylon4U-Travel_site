import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Bentota Beach.jpg",
      title: "Bentota Beach",
      description: "A pristine stretch of golden sand and clear blue waters, perfect for sunbathing, swimming, and water sports like jet skiing, windsurfing, and snorkeling.",
    },
    {
      src: "public/Must visting/Bentota River Safari.jpg",
      title: "Bentota River Safari",
      description: "Explore the mangrove forests and wildlife along the Bentota River. You can spot crocodiles, exotic birds, and monitor lizards while enjoying a peaceful boat ride.",
    },
    {
      src: "public/Must visting/Kosgoda-Turtle-Hatchery-gallery-pop-up-(1)-min.jpg",
      title: "Kosgoda Turtle Hatchery ",
      description: "A conservation center where you can learn about sea turtles, see baby turtles, and even release them into the ocean. A must-visit for wildlife enthusiasts.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/bentota.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Bentota, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Tropical Paradise of Sri Lanka</p>
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
            src="public/destinationbg/Bentota-Map-Mobile.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bentota</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Bentota, located on the southwestern coast of Sri Lanka, is a stunning beach destination famous for its golden sandy beaches, luxury resorts, thrilling water sports, and serene river cruises. Whether you’re looking for adventure, relaxation, or nature exploration, Bentota offers a perfect mix of all.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/enjko3K2tR3hQZC48" target="_blank" rel="noopener noreferrer">
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

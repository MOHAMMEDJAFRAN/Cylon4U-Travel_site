import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Mirissa-Beach.jpg",
      title: "Mirissa Beach ",
      description: "A perfect spot for sunbathing, swimming, and surfing. The soft golden sands and turquoise waters make this one of the most beautiful beaches in Sri Lanka.",
    },
    {
      src: "public/Must visting/LSL_B2_Parrot-Rock_1920x700.jpg",
      title: "Parrot Rock ",
      description: "A small rocky island near Mirissa Beach that offers amazing panoramic views of the ocean. It’s best to visit during low tide to walk across and climb to the top.",
    },
    {
      src: "public/Must visting/Whale Watching Tours.jpg",
      title: "Whale Watching",
      description: "Mirissa is one of the best places in the world for whale and dolphin watching. From November to April, you can spot blue whales, sperm whales, and playful dolphins on a boat tour.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/mirissa.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Mirissa, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Tropical Beach Paradise </p>
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
            src="public/destinationbg/mirissa-Map-m.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mirissa</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Mirissa, located on Sri Lanka’s southern coast, is a stunning beach destination famous for its golden sands, crystal-clear waters, and vibrant marine life. It is one of the best places in Sri Lanka for whale watching, surfing, and relaxing by the beach. The laid-back atmosphere, breathtaking sunsets, and lively beach bars make Mirissa a must-visit for both adventure seekers and those looking to unwind.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/3RKW7YKcdD99wpzm7" target="_blank" rel="noopener noreferrer">
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

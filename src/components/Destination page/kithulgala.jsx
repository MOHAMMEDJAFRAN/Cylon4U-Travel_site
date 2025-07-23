import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Canyoning & Waterfall Abseiling.jpg",
      title: "Canyoning & Waterfall Abseiling",
      description: "For thrill-seekers, Kitulgala offers canyoning and abseiling down waterfalls—a unique and exciting way to experience Sri Lanka’s rugged beauty.",
    },
    {
      src: "public/Must visting/white-water-rafting-at-kitulgala.jpg",
      title: "White-Water Rafting on the Kelani River ",
      description: "Kitulgala is the best place in Sri Lanka for white-water rafting. The Kelani River offers exciting rapids ranging from Grade 2 to Grade 3, making it ideal for both beginners and experienced rafters.",
    },
    {
      src: "public/Must visting/Makandawa Rainforest Reserve02-E.JPG",
      title: "Makandawa Rainforest Reserve",
      description: "A biodiversity hotspot, this lush rainforest is home to rare birds, butterflies, and exotic wildlife. It’s a great place for hiking, birdwatching, and nature photography.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/Kithulgala.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Kithulgala, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">Sri Lanka’s Adventure Capital</p>
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
            src="public/destinationbg/Kithulgala-map-m.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kithulgala</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Nestled in the rainforests of central Sri Lanka, Kitulgala is a paradise for adventure seekers and nature lovers. Known for its thrilling white-water rafting, lush jungles, and cinematic history, it is a must-visit destination for those looking for adrenaline-pumping activities and stunning scenery.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/EoX1Q5a9nP1BwEFw7" target="_blank" rel="noopener noreferrer">
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

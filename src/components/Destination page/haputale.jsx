import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Adisham Bungalow.jpg",
      title: "Adisham Bungalow",
      description: "A historic colonial mansion built by a British tea planter, now serving as a monastery. The architecture, beautiful gardens, and tranquil setting make it a must-visit spot. Visitors can explore the monastery, orchard, and jam factory.",
    },
    {
      src: "public/Must visting/Diyaluma Falls.jpg",
      title: "Diyaluma Falls",
      description: "Sri Lanka’s second-highest waterfall, standing at 220 meters, is a hidden gem near Haputale. The hiking trail to the top leads to natural infinity pools with spectacular valley views.",
    },
    {
      src: "public/Must visting/Dambatenne Tea Factory.jpeg",
      title: "Dambatenne Tea Factory",
      description: "Founded by Sir Thomas Lipton, this tea factory allows visitors to witness tea processing and taste fresh Ceylon tea. The scenic drive through tea estates is an experience in itself.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/haputhale.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Haputale, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">A Misty Mountain Escape</p>
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
            src="public/destinationbg/Haputale-map-m.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Haputale</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Haputale, a charming hill town in Sri Lanka, is famous for its breathtaking mountain views, lush tea plantations, and cool climate. Nestled in the Badulla District, it offers panoramic landscapes, colonial-era tea estates, and serene hiking trails, making it an ideal destination for nature lovers and adventure seekers.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/cBAU8v41dLbvKKmS7" target="_blank" rel="noopener noreferrer">
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

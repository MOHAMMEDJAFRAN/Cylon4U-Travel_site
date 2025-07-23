import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Nallur_Kandasamy_front_entrance.jpg",
      title: "Nallur Kandaswamy Kovi",
      description: "A stunning Hindu temple dedicated to Lord Murugan, known for its golden gopuram (tower), grand architecture, and vibrant annual festival. It is one of the most sacred temples in Sri Lanka.",
    },
    {
      src: "public/Must visting/Jaffna Fort.jpg",
      title: "Jaffna Fort",
      description: "Built by the Portuguese in the 17th century and later expanded by the Dutch, this historical fortress offers stunning ocean views, ancient ruins, and a glimpse into colonial history.",
    },
    {
      src: "public/Must visting/nagadeepa-purana-vihara.jpg",
      title: "Nagadeepa Island & Temple",
      description: "A sacred Buddhist temple located on an island off the coast of Jaffna, believed to be visited by Lord Buddha. Accessible by a short boat ride, the temple offers a serene and spiritual atmosphere.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/jaffna.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Jaffna, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Cultural Heart of Northern Sri Lanka</p>
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
            src="public/destinationbg/Jaffna-Map-Mobile.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jaffna</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Jaffna, located in the northernmost region of Sri Lanka, is a vibrant city with a rich Tamil heritage, stunning temples, colonial-era architecture, and beautiful coastal scenery. Known for its unique cuisine, historical sites, and warm hospitality, Jaffna offers a mix of history, culture, and nature that makes it a must-visit destination.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/ywBL7VndcHxGmYh89" target="_blank" rel="noopener noreferrer">
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

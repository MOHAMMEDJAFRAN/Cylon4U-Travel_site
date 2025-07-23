import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Sigiriya Rock Fortress.jpeg",
      title: "Sigiriya Rock Fortress",
      description: "The main attraction, this ancient citadel features beautiful frescoes, the Mirror Wall, and the famous Lion’s Paws, leading to the summit, where you can enjoy aerial views of the lush landscapes.",
    },
    {
      src: "public/Must visting/Sigiriya Museum.jpeg",
      title: "Sigiriya Museum",
      description: "If you love history and archaeology, this museum provides an in-depth look at Sigiriya’s past, showcasing ancient artifacts, models, and historical exhibits about the fortress and its construction.",
    },
    {
      src: "public/Must visting/minneriya-national-park.jpg",
      title: "Minneriya National Park",
      description: "A short drive from Sigiriya, Minneriya National Park is home to hundreds of elephants, exotic birds, and other wildlife. The famous Elephant Gathering, one of the world’s largest wild elephant gatherings, happens here.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/sigiriya2.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Sigiriya, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Majestic Lion Rock</p>
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
            src="public/destinationbg/Sigiriya-Map-Mobile.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sigiriya</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Sigiriya, also known as the Eighth Wonder of the World, is one of Sri Lanka’s most iconic landmarks. This ancient rock fortress, rising 200 meters above the surrounding jungle, was built in the 5th century by King Kashyapa. Sigiriya is famous for its frescoes, mirror wall, stunning gardens, and breathtaking panoramic views from the top. The site is a UNESCO World Heritage Site, attracting thousands of visitors each year to admire its historical and architectural brilliance.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/mqjdvoSwfP7c9eHs9" target="_blank" rel="noopener noreferrer">
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

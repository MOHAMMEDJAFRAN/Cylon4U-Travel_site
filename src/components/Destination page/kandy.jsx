import { motion } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation"; // Add this import

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "/Must visting/sacred temple kandy.jpeg",
      title: "Temple of the Sacred Tooth Relic",
      description: "One of the most revered Buddhist sites in the world, the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) houses a sacred tooth of the Buddha. The temple is a major pilgrimage site and features beautiful Kandyan architecture, intricate wood carvings, and stunning murals. The annual Esala Perahera festival, held here, is one of Sri Lanka's grandest cultural events.",
    },
    {
      src: "/Must visting/Kandy Lake.jpg",
      title: "Kandy Lake",
      description: "Located in the heart of the city, Kandy Lake is a peaceful retreat for those looking to escape the hustle and bustle. Built in 1807 by King Sri Wickrama Rajasinghe, the lake is surrounded by a scenic walkway, offering stunning views of the Temple of the Tooth and the surrounding hills. A sunset walk along the lake is a must for visitors.",
    },
    {
      src: "/Must visting/Peradeniya Royal Botanical Gardens.jpeg",
      title: "Peradeniya Royal Botanical Garden",
      description: "One of the most beautiful botanical gardens in Asia, the Peradeniya Royal Botanical Gardens is home to over 4,000 species of plants, including towering palm trees, exotic orchids, and rare medicinal herbs. Spread across 147 acres, this garden is a paradise for nature lovers and photographers.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/kandy.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Kandy, Sri Lanka.
          </h1>
          <p className="text-white text-xl font-serif mt-2">
            The Cultural Heart of Sri Lanka
          </p>
        </div>
      </motion.div>

      {/* Destination Description */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src="/destinationbg/Kandy-Map-Mobile.jpg" 
              alt="Kandy" 
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Kandy</h2>
              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                Kandy, often referred to as the "Hill Capital" of Sri Lanka, is a breathtaking city nestled among lush mountains and tea plantations. As a UNESCO World Heritage Site, Kandy is famous for its rich cultural heritage, stunning landscapes, and historical significance. The city was the last stronghold of the Sri Lankan kings before British colonization and remains an important center for Buddhism. Visitors can explore ancient temples, serene gardens, and scenic lakes while experiencing the city's vibrant traditions.
              </p>
              <br />
              <a href="https://maps.app.goo.gl/r5DJqKHZ9gBrMPNQA" target="_blank" rel="noopener noreferrer">
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
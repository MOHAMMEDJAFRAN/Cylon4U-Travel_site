import { motion } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation"; // Add this import

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "/Must visting/Jungle Beach.jpeg",
      title: "Jungle Beach",
      description: "A hidden tropical paradise just outside Galle, Jungle Beach is perfect for swimming, snorkeling, and sunbathing. Surrounded by lush greenery, this secluded beach offers crystal-clear waters and a peaceful atmosphere, away from the city buzz.",
    },
    {
      src: "/Must visting/Janapese-peace-pagoda-unawatuna.jpg",
      title: "Japanese Peace Pagoda",
      description: "Located on a hilltop near Jungle Beach, this stunning white stupa offers panoramic ocean views and a peaceful setting for meditation. It's a hidden gem that provides a serene escape from the busy city.",
    },
    {
      src: "/Must visting/Meeran Mosque .JPG",
      title: "Meeran Mosque ",
      description: "An architectural marvel, Meeran Mosque blends Islamic, Dutch, and Portuguese influences. Located inside Galle Fort, this mosque stands as a symbol of the city's multicultural history and offers beautiful views of the Indian Ocean.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/galle.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Galle, Sri Lanka.
          </h1>
          <p className="text-white text-xl font-serif mt-2">
            A Timeless Coastal Gem
          </p>
        </div>
      </motion.div>

      {/* Destination Description */}
      <ScrollAnimation direction="up" delay={0.1}>
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <img 
              src="/destinationbg/Galle-Map-Mobile.jpg" 
              alt="Galle" 
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Galle</h2>
              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                Located on the southern coast of Sri Lanka, Galle is a city where history, culture, and stunning ocean views come together. This UNESCO World Heritage Site is known for its colonial charm, Dutch-era buildings, vibrant streets, and breathtaking beaches. The iconic Galle Fort, built by the Portuguese in the 16th century and later expanded by the Dutch, stands as a testament to its rich past. Whether you're exploring hidden cafes, art galleries, or scenic coastal spots, Galle is a must-visit destination that blends history with tropical beauty.
              </p>
              <br />
              <a href="https://maps.app.goo.gl/7qWe4RoM6ZQp3tzG8" target="_blank" rel="noopener noreferrer">
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
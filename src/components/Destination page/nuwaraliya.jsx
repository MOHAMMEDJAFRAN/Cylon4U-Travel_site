import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/gregory-lake.jpg",
      title: "Gregory Lake",
      description: "A serene and picturesque lake perfect for boat rides, horseback riding, and relaxing walks along the scenic promenade. Gregory Lake is one of the most popular attractions in Nuwara Eliya, offering stunning views of misty mountains and lush greenery.",
    },
    {
      src: "public/Must visting/Pedro-Tea-Estate.jpg",
      title: "Pedro Tea Estate",
      description: "Explore the heart of Sri Lanka’s famous Ceylon tea production at Pedro Tea Estate. Visitors can take guided tours of the tea factory, learn about tea-making, and even sip on freshly brewed tea while enjoying views of endless green hills.",
    },
    {
      src: "public/Must visting/one-of-piduruthalagala.jpg",
      title: "Lover’s Leap Waterfall",
      description: "A beautiful yet lesser-known waterfall, Lover’s Leap is a perfect spot for a peaceful escape into nature. Legend has it that a prince and his lover leaped from the waterfall, giving it its romantic yet tragic name.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/plantation-nuwara-eliya.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Nuwaraliya, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Little England of Sri Lanka</p>
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
            src="public/destinationbg/Nuwara-Eliya-Map-Mobile.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuwaraliya</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Nestled in the central highlands, Nuwara Eliya is a charming hill station known for its cool climate, rolling tea plantations, colonial architecture, and breathtaking landscapes. Often referred to as "Little England," this city was a favorite retreat for British colonists, who left behind beautiful bungalows, gardens, and a love for high tea culture. Whether you’re looking for serene lakes, cascading waterfalls, lush gardens, or scenic train rides, Nuwara Eliya offers an unforgettable experience for nature lovers and adventure seekers.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/LirTno1cxQbTaUxa6" target="_blank" rel="noopener noreferrer">
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
        <div className="grid grid-cols-1 text-justify  md:grid-cols-3 gap-6">
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

import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Yala Safari Game Drive.png",
      title: "Yala Safari Game Drive",
      description: "A safari tour is the best way to explore Yala’s incredible wildlife. You have a high chance of spotting leopards, elephants, wild boars, spotted deer, and many bird species while driving through the park’s rugged terrain.",
    },
    {
      src: "public/Must visting/Yala Beach.jpg",
      title: "Yala Beach",
      description: "A pristine, untouched beach inside the park, offering a serene escape. Though swimming is not allowed due to strong currents, it’s a perfect place to relax and enjoy the wild coastal scenery.",
    },
    {
      src: "public/Must visting/patanangala_rock.jpg",
      title: "Patanangala Rock",
      description: "A scenic rock formation inside the park, offering stunning ocean views. It is a great place to take a break during a safari and observe the peaceful coastal beauty of Yala.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('public/images/yala.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Yala, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Ultimate Wildlife Adventure</p>
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
            src="public/destinationbg/Yala-Map-Mobile.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Yala</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
            Yala National Park, located in southeastern Sri Lanka, is the country's most famous wildlife sanctuary, covering over 979 square kilometers. It is renowned for its high density of leopards, along with elephants, sloth bears, crocodiles, and a diverse range of birds. The park’s mix of dense forests, grasslands, lagoons, and sandy beaches creates a spectacular setting for nature lovers and wildlife photographers.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/deDMWxxrvoxbN9hNA" target="_blank" rel="noopener noreferrer">
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

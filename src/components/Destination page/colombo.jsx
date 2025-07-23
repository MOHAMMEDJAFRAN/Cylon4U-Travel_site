import { motion } from "framer-motion";

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "public/Must visting/Galle-Face-Green.jpg",
      title: "Galle Face Green",
      description: "A scenic oceanfront promenade, Galle Face Green is one of the most popular places to unwind in Colombo. Stretching along the coast, this iconic location is perfect for evening strolls, kite flying, and enjoying delicious Sri Lankan street food like isso wade (spicy prawn fritters).",
    },
    {
      src: "public/Must visting/gangaramaya_temple.png",
      title: "Gangaramaya Temple",
      description: "One of Colombo’s most significant Buddhist temples, Gangaramaya Temple is a stunning architectural masterpiece that blends Sri Lankan, Thai, Indian, and Chinese styles. The temple is home to a vast collection of religious artifacts, statues, and a museum showcasing centuries-old relics. A spiritual and cultural landmark, this temple provides insight into Buddhism's deep roots in Sri Lanka.",
    },
    {
      src: "public/Must visting/lotus_tower.jpg",
      title: "Lotus Tower",
      description: "Standing at 350 meters, the Colombo Lotus Tower is the tallest structure in South Asia and an architectural wonder. The tower is illuminated with colorful LED lights at night and features an observation deck that offers panoramic views of the entire city and coastline. It’s a must-visit for breathtaking sunset views and a glimpse of Colombo from above.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('./images/beach-colombo-sri-lanka.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Colombo, Sri Lanka.
            <p className="text-white text-center text-xl font-serif">The Vibrant Capital of Sri Lanka</p>
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
            src="./destinationbg/Colombo-Map-Mobile-1.jpg" 
            alt="Colombo" 
            className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500" 
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Colombo</h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              Colombo, the bustling commercial capital of Sri Lanka, is a city where modernity meets rich cultural heritage.
              As the country’s largest city and economic hub, Colombo offers an exciting mix of colonial architecture, luxury hotels, vibrant markets, and breathtaking coastal views. 
              The city is known for its multicultural atmosphere, with influences from Portuguese, Dutch, and British colonial periods, alongside deep-rooted Sri Lankan traditions. 
              Whether you're looking for relaxation, shopping, or cultural experiences, Colombo is a must-visit destination.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/fLBo877xDv9sSnUE7" target="_blank" rel="noopener noreferrer">
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

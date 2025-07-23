import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex justify-center items-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('public/images/about_bg.jpg')" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-black text-5xl font-bold drop-shadow-lg">About Us</h1>
          <p className="text-black  text-lg mt-2 drop-shadow-lg">Discover the beauty of Sri Lanka with us</p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-6 md:px-16">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center mt-4">We aim to provide travelers with the best experiences Sri Lanka has to offer, from breathtaking landscapes to cultural wonders.</p>
        </motion.div>

        {/* Highlights Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
                <motion.div 
                key={index} 
                className="relative bg-cover bg-center shadow-lg rounded-xl text-center h-64 flex flex-col justify-end p-6"
                style={{ backgroundImage: `url(${highlight.image})` }}
                whileHover={{ scale: 1.05 }}
                >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                    <p className="text-white mt-2">{highlight.description}</p>
                </div>
                </motion.div>
            ))}
            </div>
      </div>
    </div>
  );
}

const highlights = [
  { title: "Breathtaking Locations", description: "Explore stunning beaches, mountains, and cultural sites.", image: "public/images/Breathtaking.jpg" },
  { title: "Cultural Heritage", description: "Immerse yourself in Sri Lanka’s rich traditions and history.", image: "public/images/Cultural.jpg" },
  { title: "Adventure Awaits", description: "From hiking to diving, we offer thrilling experiences.", image: "public/images/Adventurous.jpg" },
];

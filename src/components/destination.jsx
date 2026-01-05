import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation"; // Reusable scroll animation component

const destinations = [
  { id: 1, name: "Colombo", description: "Discover the ancient charm of Colombo.", image: "/images/beach-colombo-sri-lanka.jpg", link: "/colombo" },
  { id: 2, name: "Kandy", description: "Explore the wilderness of Yala National Park.", image: "/images/kandy.jpg", link: "/kandy" },
  { id: 3, name: "Nuwaraliya", description: "Discover the ancient charm of Galle, a UNESCO World Heritage site.", image: "/images/plantation-nuwara-eliya.jpg", link: "/nuwaraliya" },
  { id: 4, name: "Galle", description: "Escape to the tranquility of Ella, a picturesque village.", image: "/images/galle.jpg", link: "/galle" },
  { id: 5, name: "Sigiriya", description: "Visit the sacred city of Kandy and its famous temple.", image: "/images/sigiriya2.jpg", link: "/sigiriya" },
  { id: 6, name: "Yala National Park", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/yala.jpg", link: "/yala" },
  { id: 7, name: "Mirissa", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/mirissa.jpg", link: "/mirissa" },
  { id: 8, name: "Anuradhapura", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/anuradhapura.jpeg", link: "/anuradhapura" },
  { id: 9, name: "Trincomalee", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/trinco.jpg", link: "/trinco" },
  { id: 10, name: "Horton Plains", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/horton.jpg", link: "/horton" },
  { id: 11, name: "Jaffna", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/jaffna.jpg", link: "/jaffna" },
  { id: 12, name: "Bentota", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/bentota.jpg", link: "/bentota" },
  { id: 13, name: "Arugam Bey", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/arugambey.jpg", link: "/arugambey" },
  { id: 14, name: "Dambulla", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/dambulla.jpg", link: "/dambulla" },
  { id: 15, name: "Kithulgala", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/Kithulgala.jpg", link: "/kithulgala" },
  { id: 16, name: "Ella", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/ella.jpg", link: "/ella" },
  { id: 17, name: "Pasikudah", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/Pasikuda.jpg", link: "/pasikudah" },
  { id: 18, name: "Haputale", description: "Relax on the beautiful beaches of Mirissa.", image: "/images/haputhale.jpg", link: "/haputhale" },
];

const Destination = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 mt-[-80px] bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Destinations</h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((destination, index) => (
          <ScrollAnimation key={destination.id} direction="up" delay={index * 0.1}>
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                <p className="text-gray-700">{destination.description}</p>
                <Link to={destination.link}>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                    EXPLORE
                  </button>
                </Link>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Destination;

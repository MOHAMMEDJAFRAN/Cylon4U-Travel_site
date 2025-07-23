import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendedPlaces from "./recoment";

// Destination Data
const destinations = [
  { name: "Colombo", image: "/images/beach-colombo-sri-lanka.jpg", path: "/colombo" },
  { name: "Kandy", image: "/images/kandy.jpg", path: "/kandy" },
  { name: "Nuwara Eliya", image: "/images/plantation-nuwara-eliya.jpg", path: "/nuwaraliya" },
  { name: "Galle", image: "/images/galle.jpg", path: "/galle" },
  { name: "Sigiriya", image: "/images/sigiriya2.jpg", path: "/sigiriya" },
  { name: "Yala National Park", image: "/images/yala.jpg", path: "/yala" },
  { name: "Mirissa", image: "/images/mirissa.jpg", path: "/mirissa" },
  { name: "Anuradhapura", image: "/images/anuradhapura.jpeg", path: "/anuradhapura" },

];

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[700px] md:h-[500px] flex justify-center items-center text-white text-center overflow-hidden">
        {/* Video Background */}
        <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
        >
            <source src="public/images/Sri Lanka _ 4K Cinematic Travel Film(720P_HD)_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Overlay for Text */}
        <div className="relative z-10 bg-black bg-opacity-50 p-6 md:p-10 rounded-lg">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl md:text-6xl font-bold font-serif drop-shadow-lg">WELCOME TO SRI LANKA</h1>
            <p className="text-lg md:text-2xl mt-4 font-poppins drop-shadow-lg">Let’s Celebrate Your Holidays...</p>
            </motion.div>
        </div>
      </div>

      {/* Traveling Destination Slider */}
      <div className="text-center py-10 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-gray-800">Traveling Destinations</h2>
        <div className="mt-6 w-full md:w-4/5 mx-auto">
          <Slider {...settings}>
            {destinations.map((place) => (
              <Link key={place.name} to={place.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 transition-all duration-300 ease-in-out transform"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-xl shadow-blue-500/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="rounded-t-lg h-48 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <p className="text-xl font-semibold mt-3 text-center text-gray-800">{place.name}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      {/* Recommended Places */}
      <div className="px-4 md:px-0">
        <RecommendedPlaces />
      </div>
    </div>
  );
}

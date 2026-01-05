import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const recommendedPlaces = [
  { 
    name: "Sigiriya - The Lion Rock", 
    image: "/images/lion rock.jpeg", 
    description: "Sigiriya, a UNESCO World Heritage Site, is one of Sri Lanka's most iconic landmarks. Known as the Lion Rock, this ancient rock fortress was built by King Kashyapa in the 5th century and is perched atop a massive granite rock.",
    location: "Central Province",
    rating: 4.8,
    exploreLink: "/sigiriya"
  },
  { 
    name: "Ella - Nine Arches Bridge", 
    image: "/images/8 arch.jpg", 
    description: "The Nine Arches Bridge, also known as the Bridge in the Sky, is one of Sri Lanka's most photographed landmarks. Completed in 1921, this stunning colonial-era railway bridge stands as a marvel of engineering.",
    location: "Badulla District",
    rating: 4.6,
    exploreLink: "/ella"
  },
  { 
    name: "Nuwara Eliya - Little England", 
    image: "/images/england.jpg", 
    description: "Nuwara Eliya, often referred to as Little England, is a charming hill station that retains a colonial-era vibe with its old English-style houses and beautiful gardens.",
    location: "Central Highlands",
    rating: 4.7,
    exploreLink: "/nuwaraliya"
  },
  { 
    name: "Kandy - The Cultural Capital", 
    image: "/images/perahara.jpeg", 
    description: "Kandy is the cultural capital of Sri Lanka, known for its historical significance and breathtaking beauty. Nestled amidst lush mountains and a serene lake.",
    location: "Central Province",
    rating: 4.9,
    exploreLink: "/kandy"
  },
  { 
    name: "Mirissa - Whale Watching Paradise", 
    image: "/images/mirisa sea.jpg", 
    description: "Mirissa, located on Sri Lanka's south coast, is famous for its golden sandy beaches and crystal-clear waters. It is renowned as one of the best destinations for whale watching.",
    location: "Southern Province",
    rating: 4.5,
    exploreLink: "/mirissa"
  },
  { 
    name: "Nuwara Eliya - Ramboda Fall", 
    image: "/images/ramboda.jpg", 
    description: "Ramboda Falls is one of Sri Lanka's most beautiful and majestic waterfalls, standing at 109 meters in height. Located in the heart of Sri Lanka's tea plantations.",
    location: "Nuwara Eliya",
    rating: 4.4,
    exploreLink: "/nuwaraliya"
  },
  { 
    name: "Colombo - Lotus Tower", 
    image: "/images/lotus.jpg", 
    description: "The Lotus Tower is an iconic and modern landmark in Colombo, and the tallest structure in Sri Lanka, standing at a height of 350 meters. Shaped like a lotus flower.",
    location: "Colombo",
    rating: 4.3,
    exploreLink: "/colombo" // Specific link for Colombo
  }
];

// Custom Arrows with enhanced styling
const PrevArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white p-3 rounded-full shadow-2xl hover:from-red-700 hover:to-red-900 z-20 transition-all duration-300 hover:scale-110 hover:shadow-3xl border-2 border-white"
    aria-label="Previous slide"
  >
    <FaArrowLeft size={22} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white p-3 rounded-full shadow-2xl hover:from-red-700 hover:to-red-900 z-20 transition-all duration-300 hover:scale-110 hover:shadow-3xl border-2 border-white"
    aria-label="Next slide"
  >
    <FaArrowRight size={22} />
  </button>
);

export default function RecommendedPlaces() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: "0px",
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 text-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Recommended Popular Places
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover Sri Lanka's most breathtaking destinations with our curated selection
          </p>
        </div>

        <div className="w-[95%] md:w-4/5 mx-auto px-4">
          <Slider {...settings}>
            {recommendedPlaces.map((place, index) => (
              <div 
                key={place.name} 
                className="px-4 pb-12 pt-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`
                    relative bg-white rounded-2xl overflow-hidden shadow-xl
                    transform transition-all duration-500 ease-out
                    ${hoveredIndex === index 
                      ? 'scale-105 shadow-2xl -translate-y-4' 
                      : 'scale-95 opacity-90'
                    }
                    hover:shadow-3xl
                    group
                  `}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    transform: hoveredIndex === index 
                      ? 'rotateY(5deg) rotateX(2deg)' 
                      : 'rotateY(0deg) rotateX(0deg)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-blue-500 z-10"></div>
                  
                  {/* Image container with overlay */}
                  <div className="relative overflow-hidden h-56 md:h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className={`
                        w-full h-full object-cover transition-transform duration-700
                        ${hoveredIndex === index ? 'scale-110' : 'scale-100'}
                      `}
                    />
                    
                    {/* Rating badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full z-20 flex items-center gap-1 shadow-lg">
                      <FaStar className="text-yellow-500" />
                      <span className="font-bold text-gray-800">{place.rating}</span>
                    </div>
                    
                    {/* Location badge */}
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full z-20 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-red-400" />
                      <span className="text-white text-sm font-medium">{place.location}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {place.name}
                    </h3>
                    
                    <div className="h-px w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto mb-4"></div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 text-justify">
                      {place.description}
                    </p>
                    
                    {/* Hover button with React Router Link */}
                    <Link to={place.exploreLink}>
                      <button 
                        className={`
                          w-full py-3 rounded-xl font-semibold transition-all duration-300
                          bg-gradient-to-r from-red-500 to-red-600 text-white
                          hover:from-red-600 hover:to-red-700
                          transform hover:-translate-y-1 hover:shadow-xl
                          active:scale-95
                          border border-red-500
                          ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 translate-y-4'}
                          cursor-pointer
                        `}
                      >
                        Explore More
                      </button>
                    </Link>
                  </div>

                  {/* 3D depth effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"
                    style={{
                      transform: 'translateZ(20px)',
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: 'opacity 0.3s'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Dots customization */}
        <style jsx global>{`
          .slick-dots {
            bottom: -10px !important;
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: #9CA3AF;
          }
          .slick-dots li.slick-active button:before {
            color: #EF4444;
          }
          .slick-slide {
            transition: transform 0.5s cubic-bezier(0.87, 0, 0.13, 1);
          }
        `}</style>

        {/* View all button with React Router Link */}
        <div className="mt-10">
          <Link to="/destination">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
              <span className="relative z-10">View All Destinations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
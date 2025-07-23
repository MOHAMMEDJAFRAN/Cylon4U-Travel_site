import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const recommendedPlaces = [
  { 
    name: "Sigiriya - The Lion Rock ", 
    image: "public/images/lion rock.jpeg", 
    description: "Sigiriya, a UNESCO World Heritage Site, is one of Sri Lanka’s most iconic landmarks. Known as the Lion Rock, this ancient rock fortress was built by King Kashyapa in the 5th century and is perched atop a massive granite rock. Visitors can climb the steep steps that lead to the top, passing by stunning frescoes and the mirror wall, before reaching the fortress ruins with magnificent panoramic views of the surrounding landscape."
  },
  { 
    name: "Ella - Nine Arches Bridge", 
    image: "public/images/8 arch.jpg", 
    description: "The Nine Arches Bridge, also known as the Bridge in the Sky, is one of Sri Lanka's most photographed landmarks. Completed in 1921, this stunning colonial-era railway bridge stands as a marvel of engineering with its nine arches made entirely of brick, stone, and cement, without any steel. Located amidst lush tea plantations and misty hills, the bridge is a beautiful sight and a popular spot for photography."
  },
  { 
    name: "Nuwara Eliya - Little England", 
    image: "public/images/england.jpg", 
    description: "Nuwara Eliya, often referred to as Little England, is a charming hill station that retains a colonial-era vibe with its old English-style houses and beautiful gardens. Located in the heart of Sri Lanka's tea-growing region, it is surrounded by lush tea plantations, misty mountains, and picturesque waterfalls. The cool climate and the natural beauty make it a perfect escape from the tropical heat of the lowlands."
  },
  { 
    name: "Kandy - The Cultural Capital", 
    image: "public/images/perahara.jpeg", 
    description: "Kandy is the cultural capital of Sri Lanka, known for its historical significance and breathtaking beauty. Nestled amidst lush mountains and a serene lake, Kandy is home to the Temple of the Tooth (Sri Dalada Maligawa), one of the holiest places in Buddhism. It is famous for hosting the annual Kandy Esala Perahera, a vibrant procession with traditional dance, drumming, and beautifully decorated elephants."
  },
  { 
    name: "Mirissa - Whale Watching Paradise", 
    image: "public/images/mirisa sea.jpg", 
    description: "Mirissa, located on Sri Lanka’s south coast, is famous for its golden sandy beaches and crystal-clear waters. It is renowned as one of the best destinations in the world for whale watching, particularly blue whales and sperm whales. The calm and peaceful environment makes it perfect for a relaxing beach holiday. Along with whale watching, visitors can enjoy water sports, explore nearby coconut groves, or just relax on the beach with stunning sunsets."
  },
  { 
    name: "Nuwara Eliya - Ramboda Fall", 
    image: "public/images/ramboda.jpg", 
    description: "Ramboda Falls is one of Sri Lanka’s most beautiful and majestic waterfalls, standing at 109 meters in height. Located in the heart of Sri Lanka’s tea plantations, the waterfall is easily accessible from the Kandy-Nuwara Eliya road, offering breathtaking views. The falls are surrounded by lush greenery, making it a perfect spot for nature lovers and photographers. There is a viewing platform from where you can enjoy a spectacular view of the waterfall cascading down the rocks."
  },
  { 
    name: "Colombo - Lotus Tower", 
    image: "public/images/lotus.jpg", 
    description: "The Lotus Tower, also known as the Sri Lanka Lotus Tower, is an iconic and modern landmark in Colombo, and the tallest structure in Sri Lanka, standing at a height of 350 meters. Shaped like a lotus flower, it symbolizes Sri Lanka's cultural heritage and is a stunning sight on the Colombo skyline. Visitors can enjoy spectacular 360-degree views of Colombo from the observation deck and dine in style at the tower’s restaurants."
  }

];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-900 z-10">
    <FaArrowLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-900 z-10">
    <FaArrowRight size={20} />
  </button>
);

export default function RecommendedPlaces() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 places per slide on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1 // Show only 1 place per slide on small screens
        }
      }
    ]
  };

  return (
    <div className="bg-white py-10 text-center">
      <h2 className="text-3xl font-semibold text-red-600 mb-6">Recommended Popular Places</h2>
      <div className="w-[90%] md:w-4/5 mx-auto relative">
        <Slider {...settings}>
          {recommendedPlaces.map((place) => (
            <div key={place.name} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
              
              {/* Image */}
              <div className="w-full flex justify-center">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-[350px] h-[250px] rounded-lg object-cover border-2 border-gray-400 shadow-md"
                />
              </div>

              {/* Description */}
              <div className="w-full text-justify mt-4">
                <h3 className="text-1xl text-center font-bold text-blue-600">{place.name}</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{place.description}</p>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

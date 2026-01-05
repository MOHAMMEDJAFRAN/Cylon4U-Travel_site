import { motion } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation"; // Reusable scroll animation component

export default function DestinationPlace() {
  const mustVisitPlaces = [
    {
      src: "/Must visting/gallery_Dambulla-Cave-Temple.jpg",
      title: "Dambulla Cave Temple (Golden Temple)",
      description: "A UNESCO World Heritage Site, this stunning cave temple complex features over 150 Buddha statues, colorful murals, and ancient frescoes dating back over 2,000 years. The temple is built into a rock, offering breathtaking panoramic views of the surrounding countryside.",
    },
    {
      src: "/Must visting/namal-uyana-and-rose-quartz-mountain-sri-Lanka9.jpg",
      title: "Iron Wood Forest (Namal Uyana)",
      description: "A unique ancient ironwood forest that houses Sri Lanka’s largest quartz mountain. The forest is a peaceful escape into nature and an important Buddhist meditation site.",
    },
    {
      src: "/Must visting/Ibbankatuwa Megalithic Tombs.jpg",
      title: "Ibbankatuwa Megalithic Tombs",
      description: "A mysterious ancient burial site dating back to 300 BC, featuring stone tombs and historical artifacts. It gives visitors a glimpse into Sri Lanka’s prehistoric past.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <motion.div
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: "url('/images/dambulla.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
            Visit Dambulla, Sri Lanka
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
              src="/destinationbg/Dambulla-Map-500.jpg"
              alt="Dambulla"
              className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Dambulla</h2>
              <p className="text-gray-600 leading-relaxed text-justify text-lg">
                Dambulla, located in Sri Lanka’s Central Province, is a city rich in history, spirituality, and natural beauty. It is best known for its majestic cave temples, ancient monasteries, and scenic landscapes. Dambulla is also a key gateway to Sigiriya and the Cultural Triangle, making it a must-visit destination.
              </p>
              <br />
              <a
                href="https://maps.app.goo.gl/jwn8ntZCLM9mqvv39"
                target="_blank"
                rel="noopener noreferrer"
              >
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
        <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
          Must Visiting Places
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mustVisitPlaces.map((place, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.2}>
              <motion.div
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

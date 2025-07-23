import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home"; // Ensure correct file name and path
import Destination from "./components/destination"; // Ensure correct file name and path
import About from "./components/about"; // Ensure correct file name and path
import ContactUs from "./components/contact"; // Ensure correct file name and path
import Navbar from "./components/nav";
import Footer from "./components/footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import COLOMBU from "./components/Destination page/colombo";
import Galle from "./components/Destination page/galle";
import Kandy from "./components/Destination page/kandy";
import Nuwaraliya from "./components/Destination page/nuwaraliya";
import Sigirya from "./components/Destination page/sigiriya";
import Yala from "./components/Destination page/yala";
import Mirissa from "./components/Destination page/mirissa";
import Anuradhapura from "./components/Destination page/anuradhapura";
import Trinco from "./components/Destination page/trinco";
import Horton from "./components/Destination page/horton";
import Jaffna from "./components/Destination page/jaffna";
import Bentota from "./components/Destination page/bentota";
import Arugambey from "./components/Destination page/arugambay";
import Dambulla from "./components/Destination page/dambulla";
import Kithulgala from "./components/Destination page/kithulgala";
import Ella from "./components/Destination page/ella";
import Pasikudah from "./components/Destination page/pasikudah";
import Haputale from "./components/Destination page/haputale";

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar inside the App component */}
      <div className="bg-gray-100 min-h-screen pt-20"> {/* Ensure content doesn't overlap navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/colombo" element={<COLOMBU/>} />
          <Route path="/kandy" element={<Kandy/>} />
          <Route path="/nuwaraliya" element={<Nuwaraliya/>} />
          <Route path="/galle" element={<Galle/>} />
          <Route path="/sigiriya" element={<Sigirya/>} />
          <Route path="/yala" element={<Yala/>} />
          <Route path="/mirissa" element={<Mirissa/>} />
          <Route path="/anuradhapura" element={<Anuradhapura/>} />
          <Route path="/trinco" element={<Trinco/>} />
          <Route path="/horton" element={<Horton/>} />
          <Route path="/jaffna" element={<Jaffna/>} />
          <Route path="/bentota" element={<Bentota/>} />
          <Route path="/arugambey" element={<Arugambey/>} />
          <Route path="/dambulla" element={<Dambulla/>} />
          <Route path="/kithulgala" element={<Kithulgala/>} />
          <Route path="/ella" element={<Ella/>} />
          <Route path="/pasikudah" element={<Pasikudah/>} />
          <Route path="/haputhale" element={<Haputale/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

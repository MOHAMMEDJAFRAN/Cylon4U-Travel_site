import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import HomePage from "./components/home";
import Destination from "./components/destination";
import About from "./components/about";
import ContactUs from "./components/contact";

// Layout
import Navbar from "./components/nav";
import Footer from "./components/footer";

// Destination Pages
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

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Animation Wrapper
import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/destination" element={<PageWrapper><Destination /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactUs /></PageWrapper>} />

        <Route path="/colombo" element={<PageWrapper><COLOMBU /></PageWrapper>} />
        <Route path="/kandy" element={<PageWrapper><Kandy /></PageWrapper>} />
        <Route path="/nuwaraliya" element={<PageWrapper><Nuwaraliya /></PageWrapper>} />
        <Route path="/galle" element={<PageWrapper><Galle /></PageWrapper>} />
        <Route path="/sigiriya" element={<PageWrapper><Sigirya /></PageWrapper>} />
        <Route path="/yala" element={<PageWrapper><Yala /></PageWrapper>} />
        <Route path="/mirissa" element={<PageWrapper><Mirissa /></PageWrapper>} />
        <Route path="/anuradhapura" element={<PageWrapper><Anuradhapura /></PageWrapper>} />
        <Route path="/trinco" element={<PageWrapper><Trinco /></PageWrapper>} />
        <Route path="/horton" element={<PageWrapper><Horton /></PageWrapper>} />
        <Route path="/jaffna" element={<PageWrapper><Jaffna /></PageWrapper>} />
        <Route path="/bentota" element={<PageWrapper><Bentota /></PageWrapper>} />
        <Route path="/arugambey" element={<PageWrapper><Arugambey /></PageWrapper>} />
        <Route path="/dambulla" element={<PageWrapper><Dambulla /></PageWrapper>} />
        <Route path="/kithulgala" element={<PageWrapper><Kithulgala /></PageWrapper>} />
        <Route path="/ella" element={<PageWrapper><Ella /></PageWrapper>} />
        <Route path="/pasikudah" element={<PageWrapper><Pasikudah /></PageWrapper>} />
        <Route path="/haputhale" element={<PageWrapper><Haputale /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <div className="bg-gray-100 min-h-screen pt-20">
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Roofing from "./pages/Roofing"
import Gutters from "./pages/Gutters"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/roofing" element={<Roofing />} />
          <Route path="/gutters" element={<Gutters />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
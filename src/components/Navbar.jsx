import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">The Standard Roofing Company</Link>
        </div>

        {/* Desktop Menu */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>

          <div className="dropdown">
            <span className="dropdown-title">Services</span>
            <div className="dropdown-menu">
              <Link to="/roofing">Roofing</Link>
              {/*
              <Link to="/siding">Siding</Link>
              */}
              <Link to="/gutters">Gutters</Link>
            </div>
          </div>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="cta">
          <a href="tel:+17205387992">Call Now (720)538-7992</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>
    </header>
  );
}

/*

import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">Kirsch Roofing</h2>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

*/
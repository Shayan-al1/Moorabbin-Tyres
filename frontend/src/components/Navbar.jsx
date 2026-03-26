import { useState, useEffect } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={Logo} alt="Logo" />
        </NavLink>

        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* CTA */}
        <div className="nav-cta">
          <NavLink to="/bookings" className="book-btn">
            Book Service
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/locations" onClick={() => setMenuOpen(false)}>
          Locations
        </NavLink>
        <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

        <NavLink
          to="/bookings"
          className="mobile-book"
          onClick={() => setMenuOpen(false)}
        >
          Book Service
        </NavLink>
      </div>
    </nav>
  );
}

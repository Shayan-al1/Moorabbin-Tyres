import "../styles/hero.css";
import heroImg from "../assets/hero.jpeg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            Premium Tire & Wheel <span>Services</span>
          </h1>

          <p>
            Reliable tire installation, wheel alignment and
            services to keep your vehicle safe and performing at its best.
          </p>

          <div className="hero-buttons">
            <NavLink
              to="/bookings"
              className="btn-primary"
              target="_blank"
            >
              Book Service
            </NavLink>

            <a href="tel:+61466997265" className="btn-outline">
              Call Now
            </a>
          </div>

          {/* FLOATING STATS */}
          <div className="hero-stats">
            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>5k+</h3>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={heroImg} alt="Tire Service" />
        </div>

      </div>
    </section>
  );
}
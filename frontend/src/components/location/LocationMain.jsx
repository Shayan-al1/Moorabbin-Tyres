import { NavLink } from "react-router-dom";
import "../../styles/location/locationMain.css";

export default function LocationMain() {
  return (
    <section className="location-main">
      <div className="container location-grid">
        <div className="location-info">
          <h2>Moorabbin Tyres</h2>

          <p>433 Warrigal Rd, Moorabbin VIC 3189, Australia</p>

          <NavLink to="/bookings" className="location-btn">
            Book Service
          </NavLink>
        </div>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.2193550900265!2d145.0747069767955!3d-37.94866387194208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66dfd50d48b59%3A0xc98245c0dc7fbbfd!2sMoorabbin%20Tyres!5e0!3m2!1sen!2s!4v1773600765908!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

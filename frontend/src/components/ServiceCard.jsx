import "../styles/services.css";
import { NavLink } from "react-router-dom";

export default function ServiceCard({ title, text, image }) {
  return (
    <div className="service-card">
      <div className="service-discount">15% OFF</div>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-content">
        <h3>{title}</h3>
        <p>{text}</p>

        <NavLink
          to="/bookings"
          state={{ selectedService: title }}
          className="service-btn"
        >
          Book Now →
        </NavLink>
      </div>
    </div>
  );
}

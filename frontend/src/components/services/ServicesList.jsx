import { NavLink } from "react-router-dom";
import "../../styles/services/servicesList.css";

export default function ServicesList() {
  const services = [
    "Tire Replacement",
    "Wheel Alignment",
    "Wheel Balancing",
    // "Steering & Suspension Repair",
    "Puncture Repair",
    "Wheel & Tyre Fixing",
  ];

  return (
    <section className="services-list">
      <div className="container">
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-discount">15% OFF</div>
              <div className="service-number">0{i + 1}</div>
              <h3>{service}</h3>
              <p>
                High-quality service performed by trained technicians using
                advanced equipment.
              </p>

              <NavLink to="/bookings" className="service-btn">
                Book Service
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

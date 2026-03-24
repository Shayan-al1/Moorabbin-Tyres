import { NavLink } from "react-router-dom";
import "../styles/discountBanner.css";

export default function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="container discount-banner-inner">
        <div className="discount-copy">
          <span className="discount-pill">Limited Time Offer</span>
          <p>
            <strong>15% off</strong> tyre services when you book ahead for
            puncture repair, wheel alignment, or replacement.
          </p>
        </div>

        <div className="discount-actions">
          <a href="tel:+61466997265" className="discount-link">
            <i className="fa-solid fa-phone"></i>
            Call Now
          </a>

          <NavLink to="/bookings" className="discount-button">
            Claim Offer
          </NavLink>
        </div>
      </div>
    </section>
  );
}

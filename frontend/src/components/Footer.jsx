import "../styles/footer.css";
import Logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* BRAND */}
        <div className="footer-col">
          <img src={Logo} alt="Logo" />
          <p>
            Professional tire installation, wheel alignment and suspension
            repair services you can trust.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/locations">Locations</a>
          <a href="/contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <span>Tire Replacement</span>
          <span>Wheel Alignment</span>
          <span>Wheel Balancing</span>
          <span>Puncture Repair</span>
          <span>Steering & Suspension</span>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <span>+61 466 997 265</span>
          <span>Melbourne, Australia</span>

          <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/61466997265?text=Hello%20I%20want%20to%20book%20a%20service"
              className="social-icon"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 TireService. All rights reserved.
      </div>
    </footer>
  );
}

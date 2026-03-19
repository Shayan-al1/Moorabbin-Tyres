import "../styles/location.css";

export default function LocationSection() {
  return (
    <section className="location">
      <div className="container location-inner">
        {/* MAP */}
        <div className="map">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.2193550900265!2d145.0747069767955!3d-37.94866387194208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66dfd50d48b59%3A0xc98245c0dc7fbbfd!2sMoorabbin%20Tyres!5e0!3m2!1sen!2s!4v1773600765908!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>

        {/* INFO CARD */}
        <div className="location-card">
          <span className="location-tag">Workshop Location</span>

          <h2>Moorabbin Tyres</h2>

          <p className="location-address">
            433 Warrigal Rd
            <br />
            Moorabbin VIC 3189, Australia
          </p>

          <div className="location-info">
            <div className="location-row">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Phone</strong>
                <span>+61 466 997 265</span>
              </div>
            </div>

            <div className="location-row">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Opening Hours</strong>
                <span>Mon – Fri: 8AM – 5:30PM</span>
                <span>Sat: 8AM – 4PM</span>
              </div>
            </div>
          </div>

          <div className="location-buttons">
            <a
              href="https://wa.me/61466997265?text=Hello%20I%20want%20to%20book%20a%20service"
              className="btn-primary"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>

            <a href="tel:+61466997265" className="btn-outline">
              <i className="fas fa-phone"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

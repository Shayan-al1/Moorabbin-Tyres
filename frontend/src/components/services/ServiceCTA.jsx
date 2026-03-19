import "../../styles/services/serviceCta.css";

export default function ServiceCTA() {
  return (
    <section className="service-cta">
      <div className="container">
        <h2>Need Immediate Tire Service?</h2>
        <a
          href="https://wa.me/61466997265?text=Hello%20I%20want%20to%20book%20a%20service"
          className="cta-btn"
          target="_blank"
        >
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
}

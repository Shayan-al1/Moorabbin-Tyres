import "../../styles/location/locationCta.css";

export default function LocationCTA() {
  return (
    <section className="location-cta">
      <div className="container">
        <h2>Need Help Finding Us?</h2>
        <a
          href="https://wa.me/61466997265?text=Hello%20I%20want%20to%20book%20a%20service"
          className="cta-btn"
          target="_blank"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}

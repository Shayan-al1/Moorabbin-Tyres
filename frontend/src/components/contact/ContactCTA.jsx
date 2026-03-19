import "../../styles/contact/contactCta.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">
        <h2>Need Immediate Help?</h2>
        <a
          href="https://wa.me/61466997265?text=Hello%20I%20want%20to%20book%20a%20service"
          className="cta-btn"
          target="_blank"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

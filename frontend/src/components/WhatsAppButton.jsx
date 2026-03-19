import "../styles/whatsapp.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/61466997265?text=Hello%20I%20want%20to%20book%20a%20service"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
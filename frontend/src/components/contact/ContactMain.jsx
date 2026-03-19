import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contact/contactMain.css";

const initialForm = {
  full_name: "",
  phone_number: "",
  service_required: "",
};

export default function ContactMain() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        state: "error",
        message: "Email service is not configured. Please try again later.",
      });
      return;
    }

    setStatus({ state: "loading", message: "Sending your message..." });

    try {
      await emailjs.send(serviceId, templateId, formData, {
        publicKey,
      });

      setStatus({
        state: "success",
        message: "Message sent! We'll call you soon.",
      });
      setFormData(initialForm);
    } catch (error) {
      console.error("EmailJS error", error);
      setStatus({
        state: "error",
        message: "Couldn't send your message. Please try again in a moment.",
      });
    }
  };

  return (
    <section className="contact-main">
      <div className="container contact-grid">
        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <input
            name="full_name"
            type="text"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
          <input
            name="phone_number"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
          <textarea
            name="service_required"
            placeholder="Service Required"
            value={formData.service_required}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>

          <button type="submit" disabled={status.state === "loading"}>
            {status.state === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p className={`status status-${status.state}`}>{status.message}</p>
          )}
        </form>

        {/* INFO CARD */}
        <div className="contact-info">
          <div className="contact-info-top">
            <span className="contact-label">Our Workshop</span>
            <h2>Moorabbin Tyres</h2>
          </div>

          <div className="contact-info-row">
            <i className="fas fa-location-dot"></i>
            <div>
              <strong>Address</strong>
              <p>
                433 Warrigal Rd
                <br />
                Moorabbin VIC 3189
              </p>
            </div>
          </div>

          <div className="contact-info-row">
            <i className="fas fa-clock"></i>
            <div>
              <strong>Opening Hours</strong>
              <p>
                Mon – Fri: 8AM – 5:30PM
                <br />
                Sat: 8AM – 4PM
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/61466997265?text=Hello%20I%20want%20to%20book%20a%20service"
            className="whatsapp-btn"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
            Book Service on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import client from "../api/client.js";
import "../styles/booking.css";

const serviceOptions = [
  "Tyre Replacement",
  "Wheel Alignment",
  "Wheel Balancing",
  "Puncture Repairs",
  // "Steering & Suspension Repair",
  "Wheel & Tyre Fixing",
  "Other",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    tyreService: serviceOptions[0],
    otherServiceText: "",
    date: "",
    time: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    setError("");

    try {
      await client.post("/bookings", { ...form, status: "pending" });

      setMessage("Booking created successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        vehicleType: "",
        tyreService: serviceOptions[0],
        otherServiceText: "",
        date: "",
        time: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.error || err.message || "Something went wrong",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-header">
          <span className="section-label">Workshop Booking</span>
          <h1 className="section-title">Book Your Tyre Service</h1>
          <p className="section-subtitle">
            Fast professional tyre service scheduling with our experienced
            technicians.
          </p>
        </div>

        <form className="booking-card" onSubmit={handleSubmit}>
          <div className="booking-grid">
            <label>
              <span>Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
              />
            </label>

            <label>
              <span>Phone</span>
              <input
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+1 555 123 4567"
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label>
              <span>Vehicle Type</span>
              <input
                required
                value={form.vehicleType}
                onChange={(e) => update("vehicleType", e.target.value)}
                placeholder="SUV, Sedan, Truck..."
              />
            </label>

            <label>
              <span>Tyre Service</span>
              <select
                value={form.tyreService}
                onChange={(e) => update("tyreService", e.target.value)}
              >
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            {form.tyreService === "Other" && (
              <label className="booking-full">
                <span>Other Service Details</span>
                <input
                  required
                  value={form.otherServiceText}
                  onChange={(e) => update("otherServiceText", e.target.value)}
                  placeholder="Describe the service you need"
                />
              </label>
            )}

            <label>
              <span>Date</span>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
            </label>

            <label>
              <span>Time</span>
              <input
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
              />
            </label>
          </div>

          <div className="booking-actions">
            <button type="submit" className="theme-btn" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Booking"}
            </button>

            <p className="discount-note">
              ✔ 15% discount will be applied at service time
            </p>

            {message && <p className="booking-success">{message}</p>}

            {error && <p className="booking-error">{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

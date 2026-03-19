import { useEffect, useMemo, useState } from "react";
import client from "../api/client.js";
import "../styles/admin.css";

const PASSWORD = { user: "admin", pass: "admin123" };

const statusOptions = ["pending", "in-progress", "completed"];
const serviceOptions = [
  "All",
  "Tyre Replacement",
  "Wheel Alignment",
  "Wheel Balancing",
  "Puncture Repairs",
  "Other",
];

export default function Admin() {
  const [auth, setAuth] = useState({ user: "", pass: "", ok: false });
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [confirmBooking, setConfirmBooking] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  const isAuthed = auth.ok;

  useEffect(() => {
    if (!isAuthed) return;
    const load = async () => {
      setLoading(true);
      setError("");
      setActionMessage("");
      try {
        const { data } = await client.get("/bookings");
        setBookings(data);
      } catch (err) {
        setError(err.message || "Unable to load bookings");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [isAuthed]);

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const serviceMatch =
        serviceFilter === "All" || b.tyreService === serviceFilter;
      const statusMatch = statusFilter === "All" || b.status === statusFilter;
      return serviceMatch && statusMatch;
    });
  }, [bookings, serviceFilter, statusFilter]);

  const handleLogin = () => {
    if (auth.user === PASSWORD.user && auth.pass === PASSWORD.pass) {
      setAuth((prev) => ({ ...prev, ok: true }));
    } else {
      setError("Invalid credentials");
    }
  };

  const updateStatus = async (id, status) => {
    setError("");
    setActionMessage("");
    try {
      const { data } = await client.put(`/bookings/${id}`, { status });
      setBookings((prev) => prev.map((b) => (b._id === id ? data : b)));
    } catch (err) {
      setError(err.message || "Unable to update status");
    }
  };

  const handleDelete = async () => {
    if (!confirmBooking) return;
    setDeleting(true);
    setError("");
    setActionMessage("");
    try {
      await client.delete(`/bookings/${confirmBooking._id}`);
      setBookings((prev) => prev.filter((b) => b._id !== confirmBooking._id));
      setActionMessage("Booking deleted successfully.");
    } catch (err) {
      setError(
        err.response?.data?.error || err.message || "Unable to delete booking",
      );
    } finally {
      setDeleting(false);
      setConfirmBooking(null);
    }
  };

  return (
    <div className="theme-admin">
      <div className="page">
        {!isAuthed ? (
          <div className="admin-login-wrapper">
            <div className="admin-login-card">
              <p className="eyebrow">Tyre Service</p>
              <h2>Admin Console</h2>
              <p className="muted">Enter credentials to manage bookings</p>

              <div className="login-field">
                <span>Username</span>
                <input
                  value={auth.user}
                  onChange={(e) => setAuth({ ...auth, user: e.target.value })}
                  placeholder="Enter username"
                />
              </div>

              <div className="login-field">
                <span>Password</span>
                <input
                  type="password"
                  value={auth.pass}
                  onChange={(e) => setAuth({ ...auth, pass: e.target.value })}
                  placeholder="Enter password"
                />
              </div>

              <button onClick={handleLogin} className="primary login-btn">
                Enter Dashboard
              </button>

              {error && <p className="error">{error}</p>}
            </div>
          </div>
        ) : (
          <>
            <div className="filters card">
              <div className="filter-group">
                <span className="label">Tyre Service</span>
                <select
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                >
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <span className="label">Status</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  {["All", ...statusOptions].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="stat">
                <p className="eyebrow">Total bookings</p>
                <h3>{filteredBookings.length}</h3>
              </div>
            </div>

            {error && <p className="error">{error}</p>}
            {actionMessage && <p className="success">{actionMessage}</p>}
            {loading ? (
              <div className="card loading">Loading bookings...</div>
            ) : (
              <div className="grid">
                {filteredBookings.map((b) => (
                  <article className="card booking" key={b._id}>
                    <div className="booking-top">
                      <div>
                        <p className="eyebrow">{b.vehicleType}</p>
                        <h3>{b.name}</h3>

                        <div className="contact">
                          <span>{b.phone}</span>
                          {b.email && <span>{b.email}</span>}
                        </div>
                      </div>

                      <div className="service-badge">{b.tyreService}</div>
                    </div>

                    {b.otherServiceText && (
                      <p className="other-note">Other: {b.otherServiceText}</p>
                    )}

                    <div className="booking-meta">
                      <div className="meta-item">
                        <span className="meta-label">Date</span>
                        <strong>{b.date}</strong>
                      </div>

                      <div className="meta-item">
                        <span className="meta-label">Time</span>
                        <strong>{b.time}</strong>
                      </div>
                    </div>

                    <div className="booking-footer">
                      <div className={`status-chip ${b.status}`}>
                        {b.status}
                      </div>

                      <div className="actions">
                        <select
                          value={b.status}
                          onChange={(e) => updateStatus(b._id, e.target.value)}
                        >
                          {statusOptions.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>

                        <button
                          type="button"
                          className="danger"
                          onClick={() => setConfirmBooking(b)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
                {filteredBookings.length === 0 && (
                  <div className="card empty">
                    No bookings match these filters.
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {confirmBooking && (
        <div className="confirm-backdrop">
          <div className="confirm-modal">
            <h3>Delete booking?</h3>
            <p>
              Are you sure you want to delete booking{" "}
              <strong>{confirmBooking.name}</strong>? This cannot be undone.
            </p>
            <div className="modal-actions">
              <button type="button" className="cancel" onClick={() => setConfirmBooking(null)}>
                Cancel
              </button>
              <button
                type="button"
                className="danger"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Yes, delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

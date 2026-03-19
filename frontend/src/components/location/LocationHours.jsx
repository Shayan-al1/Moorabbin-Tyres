import "../../styles/location/locationHours.css";

export default function LocationHours() {
  return (
    <section className="location-hours">
      <div className="container">
        <h2 className="section-title">Opening Hours</h2>

        <div className="hours-card">

          <div className="hours-row">
            <span className="day">Monday – Friday</span>
            <span className="time">8:00 AM – 5:30 PM</span>
          </div>

          <div className="hours-row">
            <span className="day">Saturday</span>
            <span className="time">8:00 AM – 4:00 PM</span>
          </div>

          <div className="hours-row closed">
            <span className="day">Sunday</span>
            <span className="time">Closed</span>
          </div>

        </div>
      </div>
    </section>
  );
}
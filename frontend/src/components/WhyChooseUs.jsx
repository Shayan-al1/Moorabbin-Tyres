import "../styles/why.css";

export default function WhyChooseUs() {
  const items = [
    {
      icon: "fa-user-gear",
      title: "Certified Technicians",
      text: "Our experienced mechanics ensure high-quality service and safety."
    },
    {
      icon: "fa-screwdriver-wrench",
      title: "Modern Equipment",
      text: "We use advanced tools for precise tire and wheel servicing."
    },
    {
      icon: "fa-clock",
      title: "Fast Service",
      text: "Quick turnaround so you can get back on the road safely."
    },
    {
      icon: "fa-tags",
      title: "Affordable Pricing",
      text: "Transparent pricing with no hidden charges."
    }
  ];

  return (
    <section className="why">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="why-grid">
          {items.map((item, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
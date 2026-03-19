import ServiceCard from "./ServiceCard";
import "../styles/services.css";

import tireImg from "../assets/tire.jpg";
import alignImg from "../assets/alignment.jpg";
import balanceImg from "../assets/balance.png";
import punctureImg from "../assets/puncture.webp";
import suspensionImg from "../assets/suspension.jpg";
import DiscountBanner from "./DiscountBanner";

export default function Services() {
  const services = [
    {
      title: "Tire Replacement",
      text: "Professional tire installation and replacement services.",
      image: tireImg,
    },
    {
      title: "Wheel Alignment",
      text: "Improve steering control and extend tire lifespan.",
      image: alignImg,
    },
    {
      title: "Wheel Balancing",
      text: "Ensures smooth driving and reduces vibration.",
      image: balanceImg,
    },
    {
      title: "Puncture Repair",
      text: "Quick and reliable tire puncture repair.",
      image: punctureImg,
    },
    // {
    //   title: "Steering & Suspension",
    //   text: "Expert repair for safe and stable vehicle handling.",
    //   image: suspensionImg,
    // },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid_home">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
import "../styles/brands.css";

import michelin from "../assets/images/brands/michelin.svg";
import continental from "../assets/images/brands/continental.svg";
import cooopertires from "../assets/images/brands/cooopertires.svg";
import bfgoodrich from "../assets/images/brands/bfgoodrich.svg";
import pirelli from "../assets/images/brands/pirelli.svg";
import falken from "../assets/images/brands/falken.svg";
import generaltire from "../assets/images/brands/generaltire.svg";
import gtradial from "../assets/images/brands/gtradial.svg";
import hankook from "../assets/images/brands/hankook.svg";

export default function Brands() {
  const logos = [michelin, continental, cooopertires, bfgoodrich, pirelli, falken, generaltire, gtradial, hankook];

  return (
    <section className="brands">
      <div className="container">
        <h2 className="section-title">Trusted Tire Brands</h2>

        <div className="brands-slider">
          <div className="brands-track">
            {logos.concat(logos).map((logo, i) => (
              <img src={logo} key={i} alt="brand" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
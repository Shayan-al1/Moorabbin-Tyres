import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import ServicesList from "../components/services/ServicesList";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceCTA from "../components/services/ServiceCTA";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Tire Services | Puncture Repair & Replacement</title>
        <meta
          name="description"
          content="Explore our premium tire services including puncture repair, balancing, rotation and emergency support."
        />
      </Helmet>
      <ServicesHero />
      <ServicesIntro />
      <ServicesList />
      <ServiceProcess />
      <ServiceCTA />
    </>
  );
}

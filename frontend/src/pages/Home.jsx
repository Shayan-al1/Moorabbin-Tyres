import Hero from "../components/Hero";
import Services from "../components/Services";
import LocationSection from "../components/LocationSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Tire Service | Fast & Reliable Tyre Help</title>
        <meta
          name="description"
          content="Professional mobile tire service. Puncture repair, tyre replacement, roadside assistance and more."
        />
      </Helmet>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <LocationSection />
    </>
  );
};

export default Home;

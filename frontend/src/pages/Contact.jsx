import ContactHero from "../components/contact/ContactHero";
import ContactMain from "../components/contact/ContactMain";
import ContactMap from "../components/contact/ContactMap";
import ContactCTA from "../components/contact/ContactCTA";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Book Tire Service</title>
        <meta
          name="description"
          content="Contact our team to book tire repair or replacement service today."
        />
      </Helmet>
      <ContactHero />
      <ContactMain />
      <ContactMap />
      <ContactCTA />
    </>
  );
}

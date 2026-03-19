import LocationHero from "../components/location/LocationHero";
import LocationMain from "../components/location/LocationMain";
import LocationHours from "../components/location/LocationHours";
import LocationCTA from "../components/location/LocationCTA";
import { Helmet } from "react-helmet-async";

export default function Locations() {
  return (
    <>
      <Helmet>
        <title>Our Location | Visit Our Tire Service Center</title>
        <meta
          name="description"
          content="Find our tire service location, opening hours and directions."
        />
      </Helmet>
      <LocationHero />
      <LocationMain />
      <LocationHours />
      <LocationCTA />
    </>
  );
}

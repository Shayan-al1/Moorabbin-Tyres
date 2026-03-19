import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

function PublicLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookings" element={<Booking />} />
        </Routes>
      </PageTransition>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* PUBLIC WEBSITE */}
      <Route path="/*" element={<PublicLayout />} />

      {/* ADMIN DASHBOARD */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
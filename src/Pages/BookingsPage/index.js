import React from "react";
import Hero from "./Hero/Hero.js";
import Reservation from "./Reservation/Reservation.js";
import Footer from "../../components/Footer/Footer.js";

const BookingPage = () => {
  return (
    <div className="ReservationsPage">
      <Hero />
      <Reservation />
      <Footer />
    </div>
  );
};

export default BookingPage;

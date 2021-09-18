import React, { useState } from "react";
import Hero from "./Hero/Hero.js";
import Reservation from "./Reservation/Reservation.js";
import Footer from "../../Footer/Footer.js";
import Dropdown from "../../Dropdown/Dropdown.js";

const BookingPage = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className="ReservationsPage">
      <Hero />
      <Reservation />
      <Footer />
    </div>
  );
};

export default BookingPage;

import React, { useState } from "react";
import Hero from "./Hero/Hero.js";
import Reservation from "./Reservation/Reservation.js";

const BookingPage = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className="ReservationsPage">
      <Hero />
      <Reservation />
    </div>
  );
};

export default BookingPage;

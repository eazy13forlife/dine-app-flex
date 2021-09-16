import React, { useState } from "react";
import Hero from "./Hero/Hero.js";
import Reservation from "./Reservation/Reservation.js";
import Dropdown from "../../Dropdown/Dropdown.js";

const BookingPage = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className="ReservationsPage">
      <Hero />
      <Reservation />
      <Dropdown values={[3, 4, 5]} />
    </div>
  );
};

export default BookingPage;

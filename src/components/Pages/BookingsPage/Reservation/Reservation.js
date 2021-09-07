import React, { useState, useEffect } from "react";

import Hamburger from "../../../Hamburger/Hamburger.js";
import ReservationForm from "../../../Forms/ReservationForm.js";
import "./Reservation.scss";

const Reservation = () => {
  return (
    <div className="Reservation">
      <div className="rectangle rectangle--bottom-right-curved Reservation__rectangle"></div>
      <Hamburger
        number={6}
        width="16rem"
        height="6px"
        className="Reservation__hamburger"
      />
      <ReservationForm />
    </div>
  );
};

export default Reservation;

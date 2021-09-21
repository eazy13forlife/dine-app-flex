import React from "react";

import Hamburger from "../../../Hamburger/Hamburger.js";
import ReservationForm from "../../../Forms/ReservationForm.js";
import Rectangle from "../../../Rectangle/Rectangle.js";
import "./Reservation.scss";

const Reservation = () => {
  return (
    <div className="Reservation">
      <Rectangle side="bottom-right" additionalClass="Reservation__rectangle" />
    </div>
  );
};

export default Reservation;

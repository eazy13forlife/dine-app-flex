import React from "react";
import Rectangle from "../../../components/Rectangle/Rectangle.js";
import "./Reservation.scss";

const Reservation = () => {
  return (
    <div className="Reservation">
      <Rectangle side="BottomRight" additionalClass="Reservation__rectangle" />
    </div>
  );
};

export default Reservation;

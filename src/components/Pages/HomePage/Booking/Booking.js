import React from "react";

import LightButton from "../../../Buttons/LightButton.js";
import history from "../../../../history.js";
import "./Booking.scss";

const Booking = () => {
  return (
    <div className="Booking">
      <h2 className="secondary-heading Booking_heading">
        Ready to make a reservation?
      </h2>
      <LightButton
        text="Book a table"
        additionalClass="Booking__button"
        onButtonClick={() => {
          history.push("/bookings");
        }}
      />
    </div>
  );
};

export default Booking;

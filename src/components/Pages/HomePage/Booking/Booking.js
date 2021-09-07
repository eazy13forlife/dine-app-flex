import React from "react";

import "./Booking.scss";

const Booking = () => {
  return (
    <div className="Booking">
      <h2 className="secondary-heading Booking_heading">
        Ready to make a reservation?
      </h2>
      <button className="button button--light Booking__button">
        Book a table
      </button>
    </div>
  );
};

export default Booking;

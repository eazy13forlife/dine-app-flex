import React, { useState, useEffect } from "react";

import { ReactComponent as IconMinus } from "../../images/icons/icon-minus.svg";
import { ReactComponent as IconPlus } from "../../images/icons/icon-plus.svg";
import "./ReservationForm.scss";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: {
      month: "",
      day: "",
      year: "",
    },
    time: {
      month: "",
      day: "",
      unit: "PM",
    },
    numberOfPeople: "1",
  });

  console.log(form.name);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    date: {
      month: "",
      day: "",
      year: "",
    },
    time: {
      month: "",
      day: "",
      unit: "",
    },
    numberOfPeople: "",
  });

  return (
    <form
      action="urlofthepageontheserverthatthisformwillgoto"
      className="ReservationForm"
      method="POST"
    >
      <div className="ReservationForm__group">
        <input
          type="text"
          name="name"
          className="ReservationForm__input ReservationForm__input--large"
          id="name"
          value={form.name}
          placeholder="Name"
          onChange={(e) => {
            const value = e.target.value;
            const newForm = { ...form };
            newForm.name = value;
            setForm(newForm);
          }}
        />
      </div>

      <div className="ReservationForm__group">
        <input
          type="text"
          name="email"
          className="ReservationForm__input ReservationForm__input--large"
          id="email"
          placeholder="Email"
        />
      </div>

      <div className="ReservationForm__group">
        <h3 className="body-text-1 ReservationForm__header">Pick a date</h3>
        <input
          type="text"
          name="month"
          className="ReservationForm__input ReservationForm__input--small"
          placeholder="MM"
        />
        <input
          type="text"
          name="day"
          className="ReservationForm__input ReservationForm__input--small"
          placeholder="DD"
        />
        <input
          type="text"
          name="year"
          className="ReservationForm__input ReservationForm__input--small"
          placeholder="YYYY"
        />
      </div>

      <div className="ReservationForm__group">
        <h3 className="body-text-1 ReservationForm__header">Pick a time</h3>
        <input
          type="text"
          name="month"
          className="ReservationForm__input ReservationForm__input--small"
          placeholder="09"
        />
        <input
          type="text"
          name="day"
          className="ReservationForm__input ReservationForm__input--small"
          placeholder="00"
        />
        <input
          type="text"
          name="year"
          className="ReservationForm__input ReservationForm__input--small"
        />
      </div>

      <div className="ReservationForm__group">
        <IconMinus className="ReservationForm__icon Reservationform__icon-minus" />
        <h3 className="tertiary-heading-large ReservationForm__people">
          3 people
        </h3>
        <IconPlus className="ReservationForm__icon Reservationform__icon-plus" />
      </div>

      <div className="ReservationForm__group">
        <button className="button button--dark ReservationForm__button">
          Make reservation
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;

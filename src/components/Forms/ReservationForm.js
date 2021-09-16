import React, { useState, useEffect } from "react";
import { useField, Formik, Form, ErrorMessage } from "formik";
import Dropdown from "../Dropdown/Dropdown.js";
import userSchema from "./validations.js";

import { ReactComponent as IconMinus } from "../../images/icons/icon-minus.svg";
import { ReactComponent as IconPlus } from "../../images/icons/icon-plus.svg";
import "./ReservationForm.scss";

const initialValues = {
  name: "",
  email: "",
  date: {
    month: "",
    day: "",
    year: "",
  },
  time: {
    hour: "",
    minutes: "",
    unit: "PM",
  },
  numberOfPeople: "1",
};

const TextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className={props.className} {...props} {...field} />
      {meta.touched && meta.error ? (
        <span className="Form__error">{meta.error}</span>
      ) : null}
    </>
  );
};

const ReservationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form
        className="ReservationForm"
        action="urlofthepageontheserverthatthiswillgoto"
        method="POST"
      >
        <div className="ReservationForm__group">
          <TextInput
            name="name"
            type="text"
            placeholder="Name"
            className="ReservationForm__input ReservationForm__input--large"
          />
        </div>

        <div className="ReservationForm__group">
          <TextInput
            name="email"
            type="text"
            placeholder="Email"
            className="ReservationForm__input ReservationForm__input--large"
          />
        </div>

        <div className="ReservationForm__group">
          <h3 className="body-text-1 ReservationForm__header">Pick a date</h3>
          <TextInput
            name="date.month"
            type="text"
            placeholder="MM"
            className="ReservationForm__input ReservationForm__input--small"
          />
          <TextInput
            name="date.day"
            type="text"
            placeholder="DD"
            className="ReservationForm__input ReservationForm__input--small"
          />
          <TextInput
            name="date.year"
            type="text"
            placeholder="YYYY"
            className="ReservationForm__input ReservationForm__input--small"
          />
        </div>

        <div className="ReservationForm__group">
          <h3 className="body-text-1 ReservationForm__header">Pick a time</h3>
          <TextInput
            name="time.hour"
            type="text"
            placeholder="09"
            className="ReservationForm__input ReservationForm__input--small"
          />
          <TextInput
            name="time.minutes"
            type="text"
            placeholder="00"
            className="ReservationForm__input ReservationForm__input--small"
          />
          <Dropdown name="time.unit" values={["PM", "AM"]} />
        </div>

        <div className="ReservationForm__group">
          <IconMinus className="ReservationForm__icon Reservationform__icon-minus" />
          <h3 className="tertiary-heading-large ReservationForm__people">
            3 people
          </h3>
          <IconPlus className="ReservationForm__icon Reservationform__icon-plus" />
        </div>

        <div className="ReservationForm__group">
          <button
            type="submit"
            className="button button--dark ReservationForm__button"
          >
            Make reservation
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ReservationForm;

/*
  <TextInput
            name="time.unit"
            type="text"
            className="ReservationForm__input ReservationForm__input--small"
          />
          */

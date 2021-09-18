import React, { useState, useEffect } from "react";
import { useField, Formik, Form, ErrorMessage, Field } from "formik";

import DarkButton from "../Buttons/DarkButton.js";
import Dropdown from "../Dropdown/Dropdown.js";
import userSchema from "./validations.js";
import PeopleCounter from "../PeopleCounter/PeopleCounter.js";
import "./ReservationForm.scss";

/*
const validate = (values) => {
  const errors = {};

  if (values.date.month.length > 2) {
    errors.date = {};
    errors.date.month = "Too many";
  }

  return errors;
};*/
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
    <div
      className={`${
        props.classes.includes("ReservationForm__input--small")
          ? "ReservationForm__input-wrapper--small"
          : "ReservationForm__input-wrapper--large"
      }`}
    >
      <input
        className={`${props.classes} ${
          meta.touched && meta.error ? "ReservationForm__input--error" : null
        }`}
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className={`ReservationForm__error`}>{meta.error}</div>
      ) : null}
    </div>
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
            classes="ReservationForm__input ReservationForm__input--large"
          />
        </div>

        <div className="ReservationForm__group">
          <TextInput
            name="email"
            type="text"
            placeholder="Email"
            classes="ReservationForm__input ReservationForm__input--large"
          />
        </div>

        <div className="ReservationForm__group">
          <h3 className="body-text-1 ReservationForm__header">Pick a date</h3>
          <TextInput
            name="date.month"
            type="text"
            placeholder="MM"
            classes="ReservationForm__input ReservationForm__input--small"
            maxLength={2}
          />
          <TextInput
            name="date.day"
            type="text"
            placeholder="DD"
            classes="ReservationForm__input ReservationForm__input--small"
            maxLength={2}
          />
          <TextInput
            name="date.year"
            type="text"
            placeholder="YYYY"
            classes="ReservationForm__input ReservationForm__input--small"
            maxLength={4}
          />
        </div>

        <div className="ReservationForm__group">
          <h3 className="body-text-1 ReservationForm__header">Pick a time</h3>
          <TextInput
            name="time.hour"
            type="text"
            placeholder="09"
            classes="ReservationForm__input ReservationForm__input--small"
            maxLength={2}
          />
          <TextInput
            name="time.minutes"
            type="text"
            placeholder="00"
            classes="ReservationForm__input ReservationForm__input--small"
            maxLength={2}
          />
          <Field
            name="time.unit"
            values={["PM", "AM"]}
            initialValue="PM"
            component={Dropdown}
          />
        </div>

        <div className="ReservationForm__group">
          <Field
            name="numberOfPeople"
            initialValue={1}
            component={PeopleCounter}
          />
        </div>

        <div className="ReservationForm__group">
          <DarkButton
            text="Make reservation"
            additionalClass="ReservationForm__button"
            type="submit"
          />
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

import React, { useState } from "react";

import DarkButton from "../Buttons/DarkButton.js";
import history from "../../history.js";
import "./EventCard.scss";

const EventCard = ({ image, heading, bodyText, onOptionClick, selected }) => {
  const renderListClass = (name) => {
    if (heading === name) {
      return "EventCard__list-item--selected";
    } else {
      return "";
    }
  };

  return (
    <div className="EventCard">
      <img src={image} alt={heading} className="EventCard__image" />
      <h2 className="secondary-heading EventCard__heading">{heading}</h2>
      <div className="body-text-1 EventCard__description">{bodyText}</div>
      <DarkButton
        text="Book a table"
        additionalClass="EventCard__button"
        onButtonClick={() => {
          history.push("/bookings");
        }}
      />
      <ul className="EventCard__list">
        <li
          className={`EventCard__list-item ${renderListClass(
            "Family Gatherings"
          )}`}
          onClick={() => {
            onOptionClick("Family Gatherings");
          }}
        >
          <h3 className="tertiary-heading-small">Family Gatherings</h3>
        </li>
        <li
          className={`EventCard__list-item ${renderListClass(
            "Special Events"
          )}`}
          onClick={() => {
            onOptionClick("Special Events");
          }}
        >
          <h3 className="tertiary-heading-small">Special Events</h3>
        </li>
        <li
          className={`EventCard__list-item ${renderListClass("Social Events")}`}
          onClick={() => {
            onOptionClick("Social Events");
          }}
        >
          <h3 className="tertiary-heading-small">Social Events</h3>
        </li>
      </ul>
    </div>
  );
};

export default EventCard;

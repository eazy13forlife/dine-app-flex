import React, { useState } from "react";

import EventCard from "../../../components/EventCard/EventCard.js";
import Rectangle from "../../../components/Rectangle/Rectangle.js";

import "./Events.scss";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState("Family Gatherings");

  const onOptionClick = (event) => {
    setSelectedEvent(event);
  };

  const renderedEvent = () => {
    if (selectedEvent === "Family Gatherings") {
      return (
        <EventCard
          name="familyGatherings"
          heading="Family Gatherings"
          bodyText="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all."
          onOptionClick={onOptionClick}
        />
      );
    } else if (selectedEvent === "Special Events") {
      return (
        <EventCard
          name="specialEvents"
          heading="Special Events"
          bodyText="Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal."
          onOptionClick={onOptionClick}
        />
      );
    } else if (selectedEvent === "Social Events") {
      return (
        <EventCard
          name="socialEvents"
          heading="Social Events"
          bodyText="Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone."
          onOptionClick={onOptionClick}
        />
      );
    }
  };

  return (
    <div className="Events">
      <Rectangle side="TopRight" additionalClass="Events__rectangle-right" />
      {renderedEvent()}
    </div>
  );
};

export default Events;

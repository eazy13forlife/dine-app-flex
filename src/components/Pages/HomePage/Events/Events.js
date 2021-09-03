import Reac, { useState } from "react";

import familyGathering from "../../../../images/homepage/family-gathering-desktop.jpg";
import socialEvents from "../../../../images/homepage/social-events-desktop.jpg";
import specialEvents from "../../../../images/homepage/special-events-desktop.jpg";
import EventCard from "../../../EventCard/EventCard.js";
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
          image={familyGathering}
          heading="Family Gathering"
          bodyText="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all."
          onOptionClick={onOptionClick}
        />
      );
    } else if (selectedEvent === "Special Events") {
      return (
        <EventCard
          image={specialEvents}
          heading="Special Events"
          bodyText="Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal."
          onOptionClick={onOptionClick}
        />
      );
    } else if (selectedEvent === "Social Events") {
      return (
        <EventCard
          image={socialEvents}
          heading="Social Events"
          bodyText="Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone."
          onOptionClick={onOptionClick}
        />
      );
    }
  };

  return (
    <div className="Events">
      <div className="rectangle rectangle--right-curved Events__rectangle-right"></div>
      {renderedEvent()}
    </div>
  );
};

export default Events;

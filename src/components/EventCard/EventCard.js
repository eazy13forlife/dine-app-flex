import React from "react";

import DarkButton from "../Buttons/DarkButton.js";
import history from "../../history.js";
import Hamburger from "../Hamburger/Hamburger.js";
import "./EventCard.scss";
import images from "../../images";

const respImages = {
  familyGatherings: {
    desktop2x: images.familyGatheringDesktop2XJpg,
    desktop: images.familyGatheringDesktopJpg,
    tablet2x: images.familyGatheringTablet2XJpg,
    tablet: images.familyGatheringTabletJpg,
    mobile: images.familyGatheringMobileJpg,
    mobile2x: images.familyGatheringMobile2XJpg,
  },
  specialEvents: {
    desktop2x: images.specialEventsDesktop2XJpg,
    desktop: images.specialEventsDesktopJpg,
    tablet2x: images.specialEventsTablet2XJpg,
    tablet: images.specialEventsTabletJpg,
    mobile2x: images.specialEventsMobile2XJpg,
    mobile: images.specialEventsMobileJpg,
  },
  socialEvents: {
    desktop2x: images.socialEventsDesktop2XJpg,
    desktop: images.socialEventsDesktopJpg,
    tablet2x: images.socialEventsTablet2XJpg,
    tablet: images.socialEventsTabletJpg,
    mobile2x: images.socialEventsMobile2XJpg,
    mobile: images.socialEventsMobileJpg,
  },
};
const EventCard = ({ name, heading, bodyText, onOptionClick }) => {
  const { desktop2x, desktop, tablet2x, tablet, mobile2x, mobile } =
    respImages[name];

  const renderListClass = (name) => {
    if (heading === name) {
      return "EventCard__list-item--selected";
    } else {
      return "";
    }
  };

  return (
    <div className="EventCard">
      <Hamburger number="6" additionalClass="EventCard__hamburger" />
      <picture className="EventCard__image-container">
        <source
          media="(max-width:22.81em"
          srcSet={`${mobile2x} 2x, ${mobile} 1x`}
        />
        <source
          media="(max-width:48em)"
          srcSet={`${tablet2x} 2x, ${tablet} 1x`}
        />
        <source srcSet={`${desktop2x} 2x, ${desktop} 1x`} />
        <img src={desktop} alt={heading} className="EventCard__image" />
      </picture>
      <div className="EventCard__info">
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
            className={`EventCard__list-item ${renderListClass(
              "Social Events"
            )}`}
            onClick={() => {
              onOptionClick("Social Events");
            }}
          >
            <h3 className="tertiary-heading-small">Social Events</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventCard;

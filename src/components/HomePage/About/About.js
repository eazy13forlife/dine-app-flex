import React from "react";

import enjoyableDesktop from "../../../images/homepage/enjoyable-place-desktop.jpg";
import locallySourced from "../../../images/homepage/locally-sourced-desktop.jpg";
import DescriptionCard from "../../DescriptionCard/DescriptionCard.js";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="About__rectangle About__rectangle--right-curved"></div>
      <div className="About__content">
        <img
          src={enjoyableDesktop}
          alt="Hilly farm with grazing animals"
          className="About__image About__image--farm"
        />
        <DescriptionCard
          heading="Enjoyable place for all the family"
          bodyText="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
          className="About__description-card-enjoyable"
        />
        <DescriptionCard
          heading="The most locally sourced food"
          bodyText="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest,most sustainable food."
          className="About__description-card-local"
        />
        <img
          src={locallySourced}
          alt="A chef adding the finishing touches to a dish"
          className="About__image About__image--chef"
        />
      </div>
      <div className="About__rectangle About__rectangle--left-curved"></div>
    </div>
  );
};

export default About;

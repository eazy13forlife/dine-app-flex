import React from "react";
import images from "../../../../images";

import DescriptionCard from "../../../DescriptionCard/DescriptionCard.js";
import Rectangle from "../../../Rectangle/Rectangle.js";
import Hamburger from "../../../Hamburger/Hamburger.js";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <Rectangle side="TopRight" additionalClass="About__rectangle-top-right" />
      <Rectangle side="TopLeft" additionalClass="About__rectangle-top-left" />
      <Hamburger number="6" additionalClass="About__hamburger" />
      <div className="About__flex-container About__enjoyable-place">
        <picture className="About__image-container About__image-container--farm">
          <source
            media="(max-width:22.81em)"
            srcSet={`${images.enjoyablePlaceMobileJpg} 1x, ${images.enjoyablePlaceMobile2XJpg} 2x`}
          />
          <source
            media="(max-width:48em)"
            srcSet={`${images.enjoyablePlaceTabletJpg} 1x, ${images.enjoyablePlaceTablet2XJpg} 2x`}
          />
          <source
            srcSet={`${images.enjoyablePlaceDesktopJpg} 1x, ${images.enjoyablePlaceDesktop2XJpg} 2x`}
          />

          <img
            src={images.enjoyablePlaceDesktopJpg}
            alt="Hilly farm with grazing animals"
            className="About__image"
          />
        </picture>

        <DescriptionCard
          heading="Enjoyable place for all the family"
          bodyText="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
          className="About__description-card-enjoyable"
          color="var(--primary-color)"
        />
      </div>
      <div className="About__flex-container About__locally-sourced">
        <DescriptionCard
          heading="The most locally sourced food"
          bodyText="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest,most sustainable food."
          className="About__description-card-local"
          color="var(--primary-color)"
        />
        <picture className="About__image-container About__image-container-chef">
          <source
            media="(max-width:22.81em)"
            srcSet={`${images.locallySourcedMobileJpg} 1x, ${images.locallySourcedMobile2XJpg} 2x`}
          />
          <source
            media="(max-width:48em)"
            srcSet={`${images.locallySourcedTabletJpg} 1x, ${images.locallySourcedTablet2XJpg} 2x`}
          />
          <source
            srcSet={`${images.locallySourcedDesktopJpg} 1x, ${images.locallySourcedDesktop2XJpg} 2x`}
          />

          <img
            src={images.locallySourcedDesktopJpg}
            alt="A chef adding the finishing touches to a dish"
            className="About__image"
          />
        </picture>
      </div>
    </div>
  );
};

export default About;

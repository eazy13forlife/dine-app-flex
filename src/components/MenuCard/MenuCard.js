import React from "react";

import "./MenuCard.scss";
import images from "../../images/";

const respImages = {
  salmon: {
    tablet2x: images.salmonDesktopTablet2XJpg,
    tablet: images.salmonDesktopTabletJpg,
    mobile2x: images.salmonMobile2XJpg,
    mobile: images.salmonMobileJpg,
  },
  mousse: {
    tablet2x: images.chocolateDesktopTablet2XJpg,
    tablet: images.chocolateDesktopTabletJpg,
    mobile2x: images.chocolateMobile2XJpg,
    mobile: images.chocolateMobileJpg,
  },
  beef: {
    tablet2x: images.beefDesktopTablet2XJpg,
    tablet: images.beefDesktopTabletJpg,
    mobile2x: images.beefMobile2XJpg,
    mobile: images.beefMobileJpg,
  },
};

const MenuCard = ({ name, heading, bodyText, className }) => {
  const { tablet2x, tablet, mobile2x, mobile } = respImages[name];

  return (
    <div className={`MenuCard ${className} `}>
      <picture className="MenuCard__figure">
        <source
          media="(max-width:22.81em)"
          srcSet={`${mobile} 1x, ${mobile2x} 2x`}
        />
        <source
          media="(max-width:48em)"
          srcSet={`${tablet} 1x, ${tablet2x} 2x`}
        />
        <source srcSet={`${tablet} 1x, ${tablet2x} 2x`} />
        <img src={tablet2x} alt={heading} className="MenuCard__image" />
        <div className="MenuCard__image-line"></div>
      </picture>
      <div className="MenuCard__item-description">
        <h3 className="tertiary-heading-large MenuCard__heading">{heading}</h3>
        <p className="body-text-2 MenuCard__text">{bodyText}</p>
      </div>
    </div>
  );
};

export default MenuCard;

import React from "react";

import "./MenuCard.scss";

const MenuCard = ({ image, heading, bodyText, className }) => {
  return (
    <div className={`MenuCard ${className} `}>
      <figure className="MenuCard__figure">
        <img src={image} alt={heading} className="MenuCard__image" />
        <div className="MenuCard__image-line"></div>
      </figure>

      <h3 className="tertiary-heading-large MenuCard__heading">{heading}</h3>
      <p className="body-text-2 MenuCard__text">{bodyText}</p>
    </div>
  );
};

export default MenuCard;

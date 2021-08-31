import React from "react";

import "./DescriptionCard.scss";

const DescriptionCard = ({ heading, bodyText, className }) => {
  return (
    <div className={`DescriptionCard ${className}`}>
      <div className="DescriptionCard__shape">
        <div className="DescriptionCard__circle"></div>
        <div className="DescriptionCard__line"></div>
      </div>
      <h2 className="secondary-heading">{heading}</h2>
      <p className="body-text-1">{bodyText}</p>
    </div>
  );
};

export default DescriptionCard;

import React from "react";

import "./Rectangle.scss";

const Rectangle = ({ side, additionalClass }) => {
  return (
    <div
      className={`Rectangle ${additionalClass}`}
      style={{ [`border${side}Radius`]: "10rem" }}
    ></div>
  );
};

export default Rectangle;

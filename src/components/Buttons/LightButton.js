import React from "react";

const LightButton = ({ text, onButtonClick, additionalClass }) => {
  return (
    <button
      className={`button button--light ${additionalClass}`}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

LightButton.defaultProps = {
  type: "button",
};

export default LightButton;

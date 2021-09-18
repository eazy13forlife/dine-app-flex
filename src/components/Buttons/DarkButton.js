import React from "react";

const DarkButton = ({ text, onButtonClick, additionalClass, type }) => {
  return (
    <button
      className={`button button--dark ${additionalClass}`}
      onClick={onButtonClick}
      type={type}
    >
      {text}
    </button>
  );
};

DarkButton.defaultProps = {
  type: "button",
};

export default DarkButton;

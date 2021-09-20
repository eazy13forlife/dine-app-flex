import React from "react";
import { ReactComponent as DineLogo } from "../../../../images/logo.svg";
import history from "../../../../history.js";

import LightButton from "../../../Buttons/LightButton.js";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__svg-container">
        <DineLogo className="Header__logo" />
      </div>

      <div className="Header__content">
        <h1 className="primary-heading Header__heading">
          Exquisite dining since 1989
        </h1>
        <p className="body-text-1 Header__text">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse
        </p>
        <LightButton
          text="Book a table"
          additionalClass="Header__button"
          onButtonClick={() => {
            history.push("/bookings");
          }}
        />
      </div>
    </header>
  );
};

export default Header;

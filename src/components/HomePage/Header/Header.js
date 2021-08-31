import React from "react";
import { ReactComponent as DineLogo } from "../../../images/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__content">
        <DineLogo className="Header__logo" />
        <h1 className="primary-heading Header__heading">
          Exquisite dining since 1989
        </h1>
        <p className="body-text-1 Header__text">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse
        </p>
        <button className="button button--light Header__button">
          Book a table
        </button>
      </div>
    </header>
  );
};

export default Header;

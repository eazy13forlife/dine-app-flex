import React from "react";
import { ReactComponent as DineLogo } from "../../../../images/logo.svg";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Reservations-Hero">
      <DineLogo className="Reservations-Hero__logo" />
      <h1 className="primary-heading Reservations-Hero__heading">
        Reservations
      </h1>
      <p className="body-text-1 Reservations-Hero__text">
        We cant wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We ll be happy to
        accommodate you.
      </p>
    </div>
  );
};

export default Hero;

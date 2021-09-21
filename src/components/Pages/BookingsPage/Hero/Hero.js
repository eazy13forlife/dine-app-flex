import React, { useState, useEffect } from "react";
import { ReactComponent as DineLogo } from "../../../../images/logo.svg";
import ReservationForm from "../../../Forms/ReservationForm.js";
import LightButton from "../../../Buttons/LightButton.js";
import Hamburger from "../../../Hamburger/Hamburger.js";
import history from "../../../../history.js";
import "./Hero.scss";

const Hero = () => {
  const [isPhoneBreakpoint, setIsPhoneBreakpoint] = useState(false);

  useEffect(() => {
    const determinePhoneBreakpoint = (e) => {
      console.log("yo");
      if (e.target.innerWidth <= "365") {
        setIsPhoneBreakpoint(true);
      } else {
        setIsPhoneBreakpoint(false);
      }
    };

    window.addEventListener("resize", determinePhoneBreakpoint);

    return () => {
      window.removeEventListener("resize", determinePhoneBreakpoint);
    };
  }, []);
  return (
    <div className="Reservations-Hero">
      <div
        className="Reservations-Hero__logo-container"
        onClick={() => {
          history.push("/");
        }}
      >
        <DineLogo className="Reservations-Hero__logo" />
      </div>

      <div className="Reservations-Hero__content">
        <div className="Reservations-Hero__info">
          <h1 className="primary-heading Reservations-Hero__heading">
            Reservations
          </h1>
          <p className="body-text-1 Reservations-Hero__text">
            We cant wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We ll be happy
            to accommodate you.
          </p>
          {isPhoneBreakpoint ? (
            <LightButton
              text="Reserve Place"
              additionalClass="Reservations-Hero__button"
            />
          ) : null}
        </div>
        <div className="Reservations-Hero__form">
          <ReservationForm />
          <Hamburger
            number="6"
            additionalClass="Reservations-Hero__hamburger"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

import "./index.scss";
import Header from "./Header/Header";
import About from "./About/About.js";
import Menu from "./Menu/Menu.js";
import Events from "./Events/Events.js";

import Booking from "./Booking/Booking.js";
import Footer from "../../components/Footer/Footer.js";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <About />
      <Menu />
      <Events />
      <Booking />
      <Footer />
    </div>
  );
};

export default HomePage;

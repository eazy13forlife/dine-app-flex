import React from "react";

import "./index.scss";
import Header from "./Header/Header";
import About from "./About/About.js";
import Menu from "./Menu/Menu.js";
import Events from "./Events/Events.js";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <About />
      <Menu />
      <Events />
    </div>
  );
};

export default HomePage;

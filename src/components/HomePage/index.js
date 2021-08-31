import React from "react";

import "./index.scss";
import Header from "./Header/Header";
import About from "./About/About.js";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <About />
    </div>
  );
};

export default HomePage;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "../HomePage";
import BookingPage from "../BookingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/booking" component={BookingPage} />
    </BrowserRouter>
  );
};

export default App;

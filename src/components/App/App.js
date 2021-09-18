import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../../history.js";

import HomePage from "../Pages/HomePage";
import BookingPage from "../Pages/BookingsPage";

const App = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/bookings" component={BookingPage} />
    </Router>
  );
};

export default App;

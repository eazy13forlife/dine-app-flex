import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import BookingPage from "../Pages/BookingsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/bookings" component={BookingPage} />
    </BrowserRouter>
  );
};

export default App;

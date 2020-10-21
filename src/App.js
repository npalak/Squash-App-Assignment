import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HorizontalLinearStepper from "./HorizontalLinearStepper.js";
import SecondPage from "./SecondPage.js";
import ThirdPage from "./ThirdPage.js";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HorizontalLinearStepper}></Route>
        <Route exact path="/SecondPage" component={SecondPage}></Route>
        <Route exact path="/ThirdPage" component={ThirdPage}></Route>
      </Switch>
    </Router>
  );
}

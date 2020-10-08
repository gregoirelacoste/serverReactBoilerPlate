import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Views/Home";
import MainNav from "./MainNav";

const Routes = () => {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Route path="/about">
          <p>About level one</p>
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};
export default Routes;

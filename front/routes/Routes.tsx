import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Views/Home";
import Layout from "../Layout";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default Routes;

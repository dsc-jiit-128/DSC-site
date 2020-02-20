import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Components/landing-page/Home";
import Timeline from "../Components/highlights/Timeline";
import Team from "../Components/team/Team";
import Verify from "../Components/verification/Verify";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/highlights" component={Timeline} exact />
            <Route path="/Team" component={Team} exact />
            <Route
              path="/.well-known/acme-challenge/"
              component={Verify}
              exact
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

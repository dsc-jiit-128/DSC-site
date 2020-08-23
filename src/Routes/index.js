import React, { Component } from "react";
import { HashRouter as BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Components/landing-page/Home";
import Timeline from "../Components/highlights/Timeline";
import Team from "../Components/team/Team";
import Verify from "../Components/verification/Verify";
import Hackathon from "../Components/hackheist/Hackathon";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/highlights" component={Timeline} exact />
            <Route path="/Team" component={Team} exact />
            <Route path="/hackheist" component={Hackathon} exact />
            <Route
              path="/.well-known/acme-challenge/hrGposBd8vxeSEPLLpxpnuFrolUKWai9z60E4hjywS0"
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

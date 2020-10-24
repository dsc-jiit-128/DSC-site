import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "../Components/landing-page/Home";
import Timeline from "../Components/highlights/Timeline";
import Team from "../Components/team/Team";
import Verify from "../Components/verification/Verify";
import Hackathon from "../Components/hackheist/Hackathon";
import Bitbox from "../Components/bitbox/BitBox"
import Navbar from "../Components/common/Navbar";

class Router extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Navbar turnDark={this.props.turnDark} isDark={this.props.isDark}/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/highlights" component={Timeline} exact />
            <Route path="/Team" component={Team} exact />
            <Route path="/hackheist" component={Hackathon} exact />
            <Route path="/bitbox" component={Bitbox} exact />
            <Route
              path="/.well-known/acme-challenge/hrGposBd8vxeSEPLLpxpnuFrolUKWai9z60E4hjywS0"
              component={Verify}
              exact
            />
            <Route path="/*" component={Home} exact />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Router;

import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "../Components/landing-page/Home";
import Timeline from "../Components/highlights/Timeline";
import Team from "../Components/team/Team";
import Verify from "../Components/verification/Verify";
import Hackathon from "../Components/hackheist/Hackathon";
import Bitbox from "../Components/bitbox/BitBox"
import Navbar from "../Components/common/Navbar";
import EventPage from "../Components/EventsPage/Events";
import Photobooth from "../Components/bitbox/Photobooth";

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
            <Route path="/" render={()=><Home isDark={this.props.isDark}/>} exact />
            <Route path="/highlights" render={()=><Timeline isDark={this.props.isDark}/>} exact />
            <Route path="/Team" render={()=><Team isDark={this.props.isDark}/>} exact />
            {/* <Route path="/hackheist" render={()=><Hackathon isDark={this.props.isDark}/>} component={Hackathon} exact /> */}
            <Route path="/bitbox" render={()=><Bitbox isDark={this.props.isDark}/>} exact />
            <Route path="/photobooth" render={()=><Photobooth isDark={this.props.isDark}/>} exact />

            <Route path="/events" render={() => <EventPage isDark={this.props.isDark}/>} exact />
            <Route
              path="/.well-known/acme-challenge/hrGposBd8vxeSEPLLpxpnuFrolUKWai9z60E4hjywS0"
              component={Verify}
              exact
            />
            <Route path="/*" render={()=><Home isDark={this.props.isDark}/>} exact />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Router;

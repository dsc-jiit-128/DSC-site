import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Components/landing-page/Home";
import Timeline from "../Components/highlights/Timeline";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/highlights" component={Timeline} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

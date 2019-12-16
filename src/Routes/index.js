import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Components/landing-page/Home";
import another from "../Components/another";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/hel" component={another} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

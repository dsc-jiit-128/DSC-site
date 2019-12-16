import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes";
import "./styles.css";
import "./fonts/dsc-font.woff2";
import * as serviceWorker from "./serviceWorker";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();

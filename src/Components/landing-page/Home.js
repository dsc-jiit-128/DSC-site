import React from "react";
import Navbar from "../common/Navbar";
import { withRouter } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default withRouter(Home);

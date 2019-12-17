import React from "react";
import Navbar from "../common/Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import IconButton from "@material-ui/core/IconButton";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Section1 />
      </Container>

      <Section2 />

      <Container>
        <Section3 />
      </Container>
    </div>
  );
};

export default withRouter(Home);

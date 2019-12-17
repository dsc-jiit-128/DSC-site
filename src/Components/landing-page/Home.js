import React from "react";
import Navbar from "../common/Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";

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
        <Section4 />
      </Container>
    </div>
  );
};

export default withRouter(Home);

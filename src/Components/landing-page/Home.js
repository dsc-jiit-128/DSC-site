import React from "react";
import Navbar from "../common/Navbar";
import Section1 from "./Section1";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Section1></Section1>
      </Container>
    </div>
  );
};

export default withRouter(Home);

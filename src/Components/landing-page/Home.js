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


      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="map"
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=jiit-128&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>

      <Container id="contact">
        <Section4 />
      </Container>
    </div>
  );
};

export default withRouter(Home);

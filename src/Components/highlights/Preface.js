import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import CountUp from "react-countup";

const Preface = () => {
  return (
    <Container>
      <Typography variant="h3" component="p" className="dsc-font">
        Insights
      </Typography>

      <Typography variant="h4" component="p" className="dsc-font">
        <CountUp className="color-primary" end={7} duration={10} />
        <span>+ Languages covered</span>
      </Typography>

      <Typography variant="h4" component="p" className="dsc-font">
        <CountUp className="color-primary" end={13} duration={10} />
        <span>+ Workshops done</span>
      </Typography>

      <Typography variant="h4" component="p" className="dsc-font">
        <CountUp className="color-primary" end={542} duration={6} />
        <span>+ Students taught</span>
      </Typography>

      <Typography variant="h4" component="p" className="dsc-font">
        <CountUp className="color-primary" end={1126} duration={6} />
        <span>+ Lines of code written</span>
      </Typography>
    </Container>
  );
};

export default Preface;

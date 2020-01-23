import React from "react";
import Container from "@material-ui/core/Container";
import { Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import findings from "../../images/findings.jpg";
const Preface = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={6} sm={12}>
          <Typography variant="h3" component="p" className="dsc-font">
            Insights
          </Typography>

          <Typography variant="h4" component="p" className="dsc-font">
            <CountUp className="color-primary" end={7} duration={10} />
            <span>+ Languages covered</span>
          </Typography>

          <Typography variant="h4" component="p" className="dsc-font">
            <CountUp className="color-primary" end={10} duration={10} />
            <span>+ Events organized</span>
          </Typography>

          <Typography variant="h4" component="p" className="dsc-font">
            <CountUp className="color-success" end={13} duration={10} />
            <span>+ Workshops done</span>
          </Typography>

          <Typography variant="h4" component="p" className="dsc-font">
            <CountUp className="color-danger" end={542} duration={6} />
            <span>+ Students taught</span>
          </Typography>

          <Typography variant="h4" component="p" className="dsc-font">
            <CountUp className="color-warning" end={1126} duration={6} />
            <span>+ Lines of code written</span>
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <img
            data-aos="fade-top"
            className="first-image"
            src={findings}
            alt="searching"
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Preface;

import React from "react";
import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography, Grid } from "@material-ui/core";
import fbIcon from "../../images/Facebook.svg";
import githubIcon from "../../images/Github.svg";

const Section4 = () => {
  return (
    <div>
      <Box my={20} className="section-4">
        <Typography
          variant="h4"
          component="p"
          className="dsc-font"
          align="center"
        >
          <span className="color-primary">Catch us on </span>
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <a href="#">
              <img src={fbIcon} alt="fb-icon" className="social-icon" />
            </a>
          </Grid>
          <Grid item>
            <a href="#">
              <img src={githubIcon} alt="github-icon" className="social-icon" />
            </a>
          </Grid>
        </Grid>

        <Box mt={20}>
          <Typography
            variant="body1"
            component="p"
            className="dsc-font"
            align="center"
          >
            Made with ❤ by
          </Typography>
          <img src={dscjiit} alt="logo"></img>
        </Box>
      </Box>
    </div>
  );
};

export default Section4;

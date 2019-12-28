import React from "react";
import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography, Grid } from "@material-ui/core";
import fbIcon from "../../images/Facebook.svg";
import githubIcon from "../../images/Github.svg";
import googleIcon from "../../images/google-plus.svg";
import discordIcon from "../../images/discord.svg";

const Section4 = () => {
  return (
    <div>
      <Box mt={10} mb={2} className="section-4">
        <Typography
          variant="h4"
          component="p"
          className="dsc-font"
          align="center"
        >
          <span id="reach-us" className="color-primary">
            Catch us on{" "}
          </span>
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <a href="/">
              <img src={fbIcon} alt="fb-icon" className="social-icon" />
            </a>
          </Grid>
          <Grid item>
            <a href="/">
              <img src={githubIcon} alt="github-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item>
            <a href="/">
              <img src={googleIcon} alt="github-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item>
            <a href="/">
              <img
                src={discordIcon}
                alt="github-icon"
                className="social-icon"
              />
            </a>
          </Grid>
        </Grid>

        <Box mt={10}>
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

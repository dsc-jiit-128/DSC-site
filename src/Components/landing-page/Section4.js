import React from "react";
import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography, Grid } from "@material-ui/core";
import fbIcon from "../../images/Facebook.svg";
import githubIcon from "../../images/Github.svg";
import googleIcon from "../../images/google-plus.svg";
import twitterIcon from "../../images/Twitter.svg";
import discordIcon from "../../images/discord.svg";
import instagramIcon from "../../images/Instagram.svg";

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
          <span className="color-primary">Catch us on </span>
        </Typography>
        <Grid container justify="center">
          <Grid item data-aos="zoom-in" data-aos-duration="500">
            <a href="https://facebook.com/dscjiitnoida">
              <img src={fbIcon} alt="fb-icon" className="social-icon" />
            </a>
          </Grid>
          <Grid item data-aos="zoom-in" data-aos-duration="900">
            <a href="https://github.com/dsc-jiit-128">
              <img src={githubIcon} alt="github-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="1300">
            <a href="mailto:dscjiit128@gmail.com">
              <img src={googleIcon} alt="github-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="1700">
            <a href="https://twitter.com/Dsc128">
              <img src={twitterIcon} alt="github-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="2100">
            <a href="https://www.instagram.com/dscj128/?hl=en">
              <img src={instagramIcon} alt="github-icon" className="social-icon" />
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

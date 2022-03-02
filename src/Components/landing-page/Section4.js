import React from "react";
import dscjiitDark from "../../images/dscjiit-dark.png";
import dscjiit from "../../images/dsc_logo.svg";
import Box from "@material-ui/core/Box";
import { Typography, Grid } from "@material-ui/core";
import fbIcon from "../../images/Facebook.svg";
import githubIcon from "../../images/Github.svg";
import googleIcon from "../../images/google-plus.svg";
import twitterIcon from "../../images/Twitter.svg";
import discordIcon from "../../images/Discord-Logo.svg"
import instagramIcon from "../../images/Instagram.svg";
import youtubeIcon from "../../images/YouTube.svg";


const Section4 = ({isDark}) => {
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
            <a href="https://www.facebook.com/gdscjiit/">
              <img src={fbIcon} alt="fb-icon" className="social-icon" />
            </a>
          </Grid>
          <Grid item data-aos="zoom-in" data-aos-duration="900">
            <a href="https://github.com/dsc-jiit-128">
              <img src={githubIcon} alt="github-icon" className="social-icon"/>
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="1300">
            <a href="mailto:dscjiit128@gmail.com">
              <img src={googleIcon} alt="google-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="1700">
            <a href="https://twitter.com/Dsc128">
              <img src={twitterIcon} alt="twitter-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="2100">
            <a href="https://www.instagram.com/gdscj128/">
              <img src={instagramIcon} alt="instagram-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="2500">
            <a href="https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg">
              <img src={youtubeIcon} alt="youtube-icon" className="social-icon" />
            </a>
          </Grid>

          <Grid item data-aos="zoom-in" data-aos-duration="2500">
            <a href="https://discord.gg/HqatsVyq5H">
              <img src={discordIcon} alt="discord-icon" className="social-icon" />
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
          <img 
          src={isDark?dscjiitDark:dscjiit} 
          alt="logo" />
        </Box>
      </Box>
    </div>
  );
};

export default Section4;


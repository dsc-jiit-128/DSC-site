import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
const Section2 = () => {
  return (
    <Box my={8} p={5}>
      <Container>
        <Typography
          variant="h3"
          component="p"
          className="dsc-font"
          align="center"
        >
          What is a <span className="color-primary">DSC</span>?
        </Typography>
        <Typography variant="body1" component="p" className="dsc-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>

      <Box className="about-dsc-div" p={5}>
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} sm={12}>
            <Typography
              variant="h5"
              component="p"
              className="dsc-font"
              align="center"
            >
              <span className="color-primary">Connect</span>
            </Typography>
            <Typography variant="body1" component="p" className="dsc-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <Typography
              variant="h5"
              component="p"
              className="dsc-font"
              align="center"
            >
              <span className="color-primary">Learn</span>
            </Typography>
            <Typography variant="body1" component="p" className="dsc-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <Typography
              variant="h5"
              component="p"
              className="dsc-font"
              align="center"
            >
              <span className="color-primary">Share</span>
            </Typography>
            <Typography variant="body1" component="p" className="dsc-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Section2;

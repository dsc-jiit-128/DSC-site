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
          What do <span className="color-primary">we</span> do?
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
        <Container>
          <Grid container spacing={4}>
            <Grid item lg={3} md={3} sm={12}>
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-primary bg-primary">Hackathons</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-success bg-success">Sessions</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-warning bg-warning">Study Jams</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={12}>
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-danger bg-danger">Meetups</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Section2;

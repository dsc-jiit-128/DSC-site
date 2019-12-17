import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Section3 = () => {
  return (
    <Box my={8}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={6}>
          <Paper className="section-2-paper">
            <Typography component="p" variant="h4" align="left">
              Events at DSC-JIIT128
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>

            <Typography component="p" variant="h4" align="left">
              <Button variant="outlined">Highlights</Button>
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Paper className="section-2-paper">
            <Typography component="p" variant="h4" align="left">
              Behind the scenes
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>

            <Typography component="p" variant="h4" align="left">
              <Button variant="outlined">The Team</Button>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;

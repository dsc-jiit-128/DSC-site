import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import cosmic from "../../images/cosmic.gif";
import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const Section1 = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={6}>
          <img className="first-image" src={cosmic} alt="searching"></img>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Box mt={8}>
            <img className="first-image" src={dscjiit} alt="searching"></img>
            <Typography component="p" variant="p" align="left">
              <Container className="montserrat">
                <Box pl={7}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Box>
              </Container>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section1;

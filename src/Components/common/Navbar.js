import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import dscIcon from "../../images/logo.svg";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
const Navbar = () => {
  return (
    <AppBar className="navbar" position="static" alignItems="baseline">
      <Container>
        <Grid justify="space-between" container alignItems="center">
          <Grid item>
            <Box
              display="flex"
              onClick={() => {
                window.location = "/";
              }}
            >
              <img className="dsc-logo" src={dscIcon} alt="logo"></img>
              <p className="dsc-logo-text">
                DSC <span className="dsc-college-name">JIIT128</span>
              </p>
            </Box>
          </Grid>
          <Grid item>
            <Button>
              <MenuIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;

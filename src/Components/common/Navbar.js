import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import dscIcon from "../../images/logo.svg";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = loc => {
    window.location = loc;
    setAnchorEl(null);
  };

  return (
    <div>
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
              <Button
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      {/* // menu below */}
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            handleClose("/");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("/highlights");
          }}
        >
          Highlights
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("/team");
          }}
        >
          Team
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("/contact");
          }}
        >
          Contact Us
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;

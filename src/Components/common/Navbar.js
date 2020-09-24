import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import dscIcon from "../../images/logo.svg";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Button, Drawer, IconButton, Divider, List } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import workFromHome from "../../images/workfromhome.gif";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  return (
    <div>
      <AppBar className="navbar" position="static" alignItems="baseline">
        <Container>
          <Grid justify="space-between" container alignItems="center">
            <Grid item>
              <Box
                display="flex"
                onClick={() => {
                  window.location = "#/";
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
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      {/* // menu below */}
      <Drawer variant="persistent" anchor="right" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <img src={workFromHome} alt="workfromhome" className="slider-img" />
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              window.location = "#/";
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              window.location = "#/highlights";
            }}
          >
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary={"Highlights"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              window.location = "#/bitbox";
            }}
          >
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary={"BitBox"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              window.location = "#/team";
            }}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Team"} />
          </ListItem>
</List>
      </Drawer>
    </div>
  );
};

export default Navbar;

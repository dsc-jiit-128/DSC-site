import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
const Preface = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        component="p"
        className="dsc-font"
        align="center"
      >
        Lorem <span className="color-primary">ipsum</span>
      </Typography>
      <Typography variant="body1" component="p" className="dsc-font">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </Container>
  );
};

export default Preface;

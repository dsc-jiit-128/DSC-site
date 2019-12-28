import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import Navbar from "../common/Navbar";
import { withRouter } from "react-router-dom";
import Member from "./MemberCard";
import profileIcon from "../../images/profileAvatar.jpg";
const Team = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container className="mt-9">
        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
          >
            <span>Core</span>
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {[1, 2, 3, 7, 9].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Lorem Ipsum"
                  position="DSC Member"
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
          >
            <span>Technical</span>
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {[1, 2, 7, 9].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Lorem Ipsum"
                  position="DSC Member"
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
          >
            <span>Management</span>
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {[1, 6, 5, 7, 2, 3, 7, 9].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Lorem Ipsum"
                  position="DSC Member"
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
          >
            <span>Content writing</span>
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {[1, 2, 9].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Lorem Ipsum"
                  position="DSC Member"
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
          >
            <span>Photography</span>
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {[7, 9].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Lorem Ipsum"
                  position="DSC Member"
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
          >
            <span>Social Media and Outreach</span>
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {[1, 2, 3, 7, 9].map(val => (
            <Grid>
              <Member
                img={profileIcon}
                name="Lorem Ipsum"
                position="DSC Member"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default withRouter(Team);

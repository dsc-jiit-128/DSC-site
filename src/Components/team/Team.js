import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import Navbar from "../common/Navbar";
import { withRouter } from "react-router-dom";
import Member from "./MemberCard";
import profileIcon from "../../images/profileAvatar.jpg";
import Img from "../import_image/importImage.js";
import {
  GroupWork,
  Android,
  Bookmarks,
  BorderColor,
  Camera,
  Facebook
} from "@material-ui/icons";
import Section4 from "../landing-page/Section4";

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
            data-aos="flip-left"
          >
            <span>
              Core <GroupWork className="color-primary" fontSize="large" />
            </span>
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
                  img={Img[0].im}
                  name={Img[0].name}
                  position={Img[0].position}
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
            data-aos="flip-right"
          >
            <span>
              Technical <Android className="color-success" fontSize="large" />
            </span>
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
            data-aos="flip-left"
          >
            <span>
              Management{" "}
              <Bookmarks className="color-warning" fontSize="large" />
            </span>
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
            data-aos="flip-right"
          >
            <span>
              Content writing{" "}
              <BorderColor className="color-primary" fontSize="danger" />
            </span>
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
            data-aos="flip-left"
          >
            <span>
              Photography <Camera className="color-danger" fontSize="large" />
            </span>
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
            data-aos="flip-right"
          >
            <span>
              Social Media and Outreach{" "}
              <Facebook className="color-primary" fontSize="large" />
            </span>
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
                name="Tanisha Srivastava"
                position="DSC Member"
              />
            </Grid>
          ))}
        </Grid>
        <Section4 />
      </Container>
    </div>
  );
};

export default withRouter(Team);

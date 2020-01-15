import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import question from "../../images/question.jpg";
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
        <Grid container>
          <Grid sm={12} md={6} lg={6} data-aos="zoom-in">
            <Typography variant="body1" component="p" className="dsc-font">
              With our team's moto being "Giving Direction to Greatness", we help the students to climb mountains on their own, as high as possible.
              We conduct two flagship events, namely, Hackovation and ExploreML and various technical workshops, sessions, meetups and fun events as well.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <img
              data-aos="flip-right"
              className="first-image"
              src={question}
              alt="searching"
            ></img>
          </Grid>
        </Grid>
      </Container>

      <Box className="about-dsc-div" p={5}>
        <Container>
          <Grid container spacing={4}>
            <Grid
              data-aos="fade-up"
              data-aos-duration="500"
              item
              lg={3}
              md={3}
              sm={12}
            >
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-primary bg-primary">Hackathons</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                The idea of conducting hackathons is to make students code collaboratively from scratch to end with a working prototype.
              </Typography>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-duration="800"
              item
              lg={3}
              md={3}
              sm={12}
            >
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-success bg-success">Sessions</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                Small sessions for the students to showcase their projects, achievements and for getting to know about the current trends.
              </Typography>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-duration="1100"
              item
              lg={3}
              md={3}
              sm={12}
            >
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-warning bg-warning">Study Jams</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                Study Jams are community-run groups for Developers. Whether you are a beginner or an experienced developer, you get to learn new things.
              </Typography>
            </Grid>

            <Grid
              data-aos="fade-up"
              data-aos-duration="1400"
              item
              lg={3}
              md={3}
              sm={12}
            >
              <Typography
                variant="h5"
                component="p"
                className="dsc-font"
                align="center"
              >
                <span className="color-danger bg-danger">Meetups</span>
              </Typography>
              <Typography variant="body1" component="p" className="dsc-font">
                Regular meetings are organised for the students who share the same technical interests, so they can get connected with each other.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Section2;

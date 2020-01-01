import React from "react";
import Navbar from "../common/Navbar";
import { Typography, Box, Grid, Container } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import StarIcon from "@material-ui/icons/Star";
import WorkIcon from "@material-ui/icons/Work";
// import SchoolIcon from "@material-ui/icons/School";
import { withRouter } from "react-router-dom";
import Preface from "./Preface";
import Carousel from "./Carousel";
import csjBg from "../../images/csj-wallpaper.png";
import exploreMLbg from "../../images/exploreml-wallpaper.png";
import Section4 from "../landing-page/Section4";

const Timeline = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Box className="mt-9">
        <Preface />
        <Typography
          className="dsc-font"
          component="p"
          variant="h3"
          align="center"
        >
          Workshops
        </Typography>

        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              component="p"
              variant="h3"
              align="left"
            >
              WebDev 19.1
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(219,68,55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(219,68,55)" }}
            date="2019"
            iconStyle={{ background: "rgb(219,68,55)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              component="p"
              variant="h3"
              align="left"
            >
              WebDev 19.1
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(15,157,88)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(15,157,88)" }}
            date="2019"
            iconStyle={{ background: "rgb(15,157,88)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              component="p"
              variant="h3"
              align="left"
            >
              WebDev 19.1
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(244,160,0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(244,160,0)" }}
            date="2019"
            iconStyle={{ background: "rgb(244,160,0)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              component="p"
              variant="h3"
              align="left"
            >
              WebDev 19.1
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(15,157,88)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(15,157,88)" }}
            date="2019"
            iconStyle={{ background: "rgb(15,157,88)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              component="p"
              variant="h3"
              align="left"
            >
              WebDev 19.1
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(244,160,0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(244,160,0)" }}
            date="2019"
            iconStyle={{ background: "rgb(244,160,0)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              component="p"
              variant="h3"
              align="left"
            >
              WebDev 19.1
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(219,68,55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(219,68,55)" }}
            date="2019"
            iconStyle={{ background: "rgb(219,68,55)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              component="p"
              variant="h3"
              align="left"
            >
              WebDev 19.1
            </Typography>

            <Typography component="p" variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Typography
          id="csj"
          className="dsc-font"
          component="p"
          variant="h3"
          align="center"
        >
          Cloud Study Jam
        </Typography>
        <img src={csjBg} alt="csj-bg" className="csj-bg" />

        <Container>
          <Box mt={5}>
            <Grid container>
              <Grid item sm={12} md={6} lg={6} data-aos="flip-left">
                <Box>
                  <Container>
                    <Typography
                      className="dsc-font"
                      component="p"
                      variant="h3"
                      align="left"
                    >
                      Lorem ipsum
                    </Typography>
                    <Typography component="p" variant="body1" align="left">
                      something related to event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Typography>
                  </Container>
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6} className="carousel">
                <Carousel data-aos="flip-right" />
              </Grid>
            </Grid>
            <Container>
              <Typography
                className="dsc-font"
                component="p"
                variant="h3"
                align="left"
              >
                Highlights
              </Typography>
              <Typography className="dsc-font" component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Container>
          </Box>
        </Container>

        <Box mt={5} pt={5}>
          <Typography
            id="exploreml"
            className="dsc-font"
            component="p"
            variant="h3"
            align="center"
          >
            ExploreML
          </Typography>
        </Box>

        <img src={exploreMLbg} alt="csj-bg" className="csj-bg" />

        <Container>
          <Box mt={5}>
            <Grid container>
              <Grid item sm={12} md={6} lg={6} className="carousel">
                <Carousel data-aos="flip-right" />
              </Grid>
              <Grid item sm={12} md={6} lg={6} data-aos="flip-left">
                <Box>
                  <Container>
                    <Typography
                      className="dsc-font"
                      component="p"
                      variant="h3"
                      align="left"
                    >
                      Lorem ipsum
                    </Typography>
                    <Typography component="p" variant="body1" align="left">
                      something related to event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Typography>
                  </Container>
                </Box>
              </Grid>
            </Grid>
            <Container>
              <Typography
                className="dsc-font"
                component="p"
                variant="h3"
                align="left"
              >
                Highlights
              </Typography>
              <Typography className="dsc-font" component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Container>
          </Box>
          <Section4 />
        </Container>
      </Box>
    </div>
  );
};

export default withRouter(Timeline);

import React from "react";
import Navbar from "../common/Navbar";
import webdev1 from "../../images/webdev1.jpeg";
import webdev2 from "../../images/webdev2.jpeg";
import webdev3 from "../../images/webdev3.jpg";
import webdev5 from "../../images/webdev5.jpeg";
import webdev4 from "../../images/webdev4.jpeg";
import webdev6 from "../../images/webdev6.jpeg";
import python from "../../images/python.jpg";

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

        <VerticalTimeline animate={false}>
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
            <img src={webdev1} height="75%" width="100%" alt="workshop-1" />
            <Typography component="p" variant="body1" align="left">
              A workshop on introduction to Basics of Web Development was
              conducted. The topics covered in the workshop were basically from
              HTML and CSS(basic).
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
              CSS Basics 19.1
            </Typography>
            <img src={webdev2} height="75%" width="100%" alt="workshop-2" />
            <Typography component="p" variant="body1" align="left">
              A workshop on introduction to CSS was conducted. Following a quick
              recap and brief introductory lecture on CSS, the work shop
              proceeded to hands on training session.
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
              CSS Advanced 19.2
            </Typography>
            <img src={webdev3} height="75%" width="100%" alt="workshop-3" />
            <Typography component="p" variant="body1" align="left">
              A workshop on Advanced CSS was conducted. Following a quick recap
              and brief introductory lecture on CSS, the work shop proceeded to
              hands on training session.
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
              WebDev 19.5
            </Typography>
            <img src={webdev4} height="75%" width="100%" alt="workshop-4" />
            <Typography component="p" variant="body1" align="left">
              A workshop on Javascript Basics was conducted. Following a brief
              introduction about the language, the basics was taught to the
              students with the help of a live session.
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
              WebDev 19.6
            </Typography>
            <img src={webdev5} height="75%" width="100%" alt="workshop-5" />
            <Typography component="p" variant="body1" align="left">
              A workshop on DOM Manipulation was conducted , the workshop was
              fortunate to have zestful engagement from students. The leading
              technical facilitators looked after the proper functioning and
              ensured that workshop led a systematised and methodical way.
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
              UI/UX Session
            </Typography>
            <img src={webdev6} height="75%" width="100%" alt="workshop-6" />
            <Typography component="p" variant="body1" align="left">
              A UI/UX session was conducted to familiarize attendees with the
              basics of designing in association with Prismatics
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
              Python Basics Workshop
            </Typography>
            <img src={python} height="75%" width="100%" alt="workshop-7" />
            <Typography component="p" variant="body1" align="left">
              A workshop on Basic Python was conducted , the workshop was
              fortunate to have active participation from students of all
              batches. The main technical coordinators looked after the smooth
              running of and ensured that workshop followed an automated
              process.
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
                      Event Details
                    </Typography>
                    <Typography component="p" variant="body1" align="left">
                      From containerizing applications to creating virtual
                      machines, Study Jams can be tailored to specific Cloud
                      topics and skill levels. Whether you’re a beginner
                      developer or interested in diving into Machine Learning,
                      BigQuery, Certification, or Kubernetes - there's a track
                      for you. You'll learn the fundamental tools and
                      capabilities of Google Cloud with free access to hands-on
                      labs. All Study Jam participants get one-month free access
                      to QwikLabs. Users who complete designated quests receive
                      Google Cloud badges, unlocking additional free access.
                    </Typography>
                  </Container>
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={6} className="carousel">
                <Carousel data-aos="flip-right" name="gcp" />
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
                A workshop on GCP(Google Cloud Programme) was conducted, the
                workshop was fortunate to have zestful engagement from students.
                The leading technical facilitators looked after the proper
                functioning and ensured that workshop led a systematic and
                methodical way. The students were given an outline and brief
                highlights of the contentions that were to be covered in this
                workshop.Technical coordinators facilitated the synchronized
                teaching and hands-on sessions. The tracks on which labs were
                completed are as follows: Ø App development Ø Machine Learning Ø
                Data Science
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
                <Carousel data-aos="flip-right" name="exploreML" />
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
                      Event Details
                    </Typography>
                    <Typography component="p" variant="body1" align="left">
                      Explore Machine Learning (ML) is a Google-sponsored
                      program for university students to get started with
                      Machine Learning. The curriculum offers 3 tracks of
                      Machine Learning Content (Beginner, Intermediate,
                      Advanced) and relies on our student facilitators to train
                      other students on campus. Explore ML facilitators will
                      deliver learning and development experiences to students
                      on campus in a 'flipped classroom' environment.
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
                ExploreML was conducted in our campus in November and it was
                fortunate to see enthusiastic students. The leading technical
                facilitators having profound knowledge of Machine Learning
                looked after the proper functioning and ensured that the event
                was led in a systematic and methodical way. The Technical
                coordinators facilitated the synchronized teaching, offered
                doubts-clearing and hands-on sessions.
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

import React from "react";
import Navbar from "../common/Navbar";
import { Container, Typography, Box } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { withRouter } from "react-router-dom";
import Preface from "./Preface";
const Timeline = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Box mt={10}>
        <Preface />
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
      </Box>
    </div>
  );
};

export default withRouter(Timeline);

import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import Navbar from "../common/Navbar";
import { withRouter } from "react-router-dom";
import Member from "./MemberCard";
import profileIcon from "../../images/profileAvatar.jpg";
// import Img from "../import_image/importImage.js";
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

    const coreArr=[
      {
        img:"",
        name:"Fahad Siddiqui",
        position:"Community Lead"
      },
      {
      img:"",
      name:"Shubham Dubey",
      position:"Management Lead"
    },
    {
      img:"",
      name:"Ayush Tiwari",
      position:"Management Lead"
    },
    {
      img:"SamarthSharma.jpg",
      name:"Samarth Sharma",
      position:"Technical Lead"
    },
    {
      img:"ShreyanshVarshney.jpg",
      name:"Shreyansh Varshney",
      position:"Technical Advisior"
    }
  ]

  const TechnicalArr=[
    {
      img:"",
      name:"Jai Parakh",
      position:"Full Stack"
    },
    {
    img:"",
    name:"Rohan Verma",
    position:"Android"
  },
  {
    img:"",
    name:"Abhinav Verma",
    position:"ML"
  },
  {
    img:"",
    name:"Shivam Agarwal",
    position:"ML"
  },
  {
    img:"",
    name:"Pawan Kumar",
    position:"Web"
  },
  {
    img:"",
    name:"Satyam Mittal",
    position:"ML"
  },
  {
    img:"",
    name:"Abhinav Srivastva",
    position:"Web"
  },
  {
    img:"",
    name:"Simran Shilky",
    position:"Web"
  },
  {
    img:"",
    name:"Utkarsh Pandey",
    position:"Web"
  },
  {
    img:"",
    name:"Shriyam Tripathi",
    position:"Flutter"
  },
  {
    img:"",
    name:"Suyash Singh",
    position:"Web"
  },
  {
    img:"",
    name:"Aman Jhaketiya",
    position:"ML"
  },
  {
    img:"",
    name:"Shubhangi Agarwaal",
    position:"Web"
  }
]
const managementTeam=[
  {
    img:"",
    name:"Saksham Srivastav",
    position:"Event Manager"
  },
  {
    img:"",
    name:"Aditya Dahiya",
    position:"PR Head"
  },

  {
    img:"",
    name:"Surbhi Varshney",
    position:"Content Writing"
  },
  {
    img:"",
    name:"Megha Singhal",
    position:"PR Member"
  }

]
const socialMedia=[
  {
    img:"",
    name:"Tanisha Srivastava",
    position:"Social Media Head"
  }
]
const photoTeam=[
  {
    img:"",
    name:"Yash",
    position:"Photography"
  },
  {
    img:"",
    name:"Saksham",
    position:"Photography"
  }
]
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
            {[1].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Fahad Siddiqui"
                  position="DSC Member"
                />
              </Grid>
            ))}
            {[2].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Shubham"
                  position="DSC Member"
                />
              </Grid>
            ))}
            {[3].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Shriyam"
                  position="DSC Member"
                />
              </Grid>
            ))}
            {[4].map(val => (
              <Grid>
                <Member img={profileIcon} name="Uphaar" position="DSC Member" />
              </Grid>
            ))}
            {[7].map(val => (
              <Grid>
                <Member
                  img={profileIcon}
                  name="Ayush Tiwari"
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

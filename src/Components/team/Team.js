import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import Navbar from "../common/Navbar";
import { withRouter } from "react-router-dom";
import Member from "./MemberCard";
// import profileIcon from "../../images/profileAvatar.jpg";
// import Img from "../import_image/importImage.js";
import {
  GroupWork,
  Android,
  Bookmarks,
  BorderColor,
  Camera,
  Facebook
} from "@material-ui/icons";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Section4 from "../landing-page/Section4";

const Team = () => {
  const coreArr = [
    {
      img: "AbhinavSrivastava.jpg",
      name: "Abhinav Srivastava",
      position: "Community Lead"
    },
    {
      img: "Tanya.jpg",
      name: "Tanya Rastogi",
      position: "Management Lead"
    },
    {
      img: "SimranShilky.jpg",
      name: "Simran Shilky",
      position: "Management Lead"
    },
    {
      img: "UtkarshPandey.jpg",
      name: "Utkarsh Pandey",
      position: "Technical Lead"
    },
    {
      img: "ShriyamTripathi.jpg",
      name: "Shriyam Tripathi",
      position: "Technical Advisor"
    },
    {
      img: "TanishaSrivastava.jpg",
      name: "Tanisha Srivastava",
      position: "Social Media Lead"
    },
    {
      img: "Samriddhi.jpg",
      name: "Samriddhi Gupta",
      position: "Content Creation Lead"
    },
    {
      img: "Saksham.jpg",
      name: "Saksham",
      position: "Event Manager"
    }
  ]
  const SeniorArr = [
    {
      img: "FahadSiddiqui.jpg",
      name: "Fahad Siddiqui",
      position: "Community Lead"
    },
    {
      img: "ShubhamDubey.jpg",
      name: "Shubham Dubey",
      position: "Management Lead"
    },
    {
      img: "AyushTiwari.jpg",
      name: "Ayush Tiwari",
      position: "Management Lead"
    },
    {
      img: "SamarthSharma.jpg",
      name: "Samarth Sharma",
      position: "Technical Lead"
    },
    {
      img: "ShreyanshVarshney.jpg",
      name: "Shreyansh Varshney",
      position: "Technical Advisor"
    },
    {
      img: "SakshamSrivastava.jpg",
      name: "Saksham Srivastava",
      position: "Event Manager"
    },
    {
      img: "JaiParakh.jpg",
      name: "Jai Parakh",
      position: "Full Stack"
    },
    {
      img: "RohanVerma.jpg",
      name: "Rohan Verma",
      position: "Android"
    },
    {
      img: "AbhinavVerma.jpg",
      name: "Abhinav Verma",
      position: "ML"
    },
    {
      img: "ShivamAggarwal.jpg",
      name: "Shivam Agarwal",
      position: "ML"
    },
    {
      img: "PawanKumar.jpg",
      name: "Pawan Kumar",
      position: "Web"
    },
    {
      img: "SatyamMittal.jpg",
      name: "Satyam Mittal",
      position: "ML"
    }
  ];

  const TechnicalArr = [
    {
      img: "SuyashSingh.jpg",
      name: "Suyash Singh",
      position: "Web"
    },
    {
      img: "AmanJakhetiya.jpg",
      name: "Aman Jakhetiya",
      position: "ML"
    }
  ];
  const managementTeam = [
    {
      img: "cat2.gif",
      name: "Aditya Dahiya",
      position: "PR Head"
    },
    {
      img: "cat2.gif",
      name: "Megha Singhal",
      position: "PR Member"
    },
    {
      img: "Gaurav.jpg",
      name: "Gaurav Sharan",
      position: "PR Member"
    }
  ];
  const socialMedia = [
    {
      img: "TanishaSrivastava.jpg",
      name: "Tanisha Srivastava",
      position: "Social Media Lead"
    }
  ];
  const photoTeam = [
    {
      img: "Yash.jpg",
      name: "Yash",
      position: "Photography"
    }
  ];

  const contentTeam = [
    {
      img: "Samriddhi.jpg",
      name: "Samriddhi Gupta",
      position: "Content Creation Lead"
    }
  ];

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
            {coreArr.map(val => (
              <Grid>
                <Member img={val.img} name={val.name} position={val.position} />
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
            {TechnicalArr.map(val => (
              <Grid>
                <Member img={val.img} name={val.name} position={val.position} />
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
            {managementTeam.map(val => (
              <Grid>
                <Member img={val.img} name={val.name} position={val.position} />
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
            {contentTeam.map(val => (
              <Grid>
                <Member img={val.img} name={val.name} position={val.position} />
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
            {photoTeam.map(val => (
              <Grid>
                <Member img={val.img} name={val.name} position={val.position} />
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
          {socialMedia.map(val => (
            <Grid>
              <Member img={val.img} name={val.name} position={val.position} />
            </Grid>
          ))}
        </Grid>
        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
            data-aos="flip-right"
          >
            <span>
              Previous Team{" "}
              <EmojiPeopleIcon className="color-primary" fontSize="large" />
            </span>
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {SeniorArr.map(val => (
            <Grid>
              <Member img={val.img} name={val.name} position={val.position} />
            </Grid>
          ))}
        </Grid>
        <Section4 />
      </Container>
    </div>
  );
};

export default withRouter(Team);

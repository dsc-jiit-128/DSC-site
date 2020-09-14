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
      img: "SimranShilky.jpg",
      name: "Simran Shilky",
      position: "Design Lead"
    },
   
    {
      img: "Tanya.jpeg",
      name: "Tanya Rastogi",
      position: "Management Lead"
    },
    {
      img: "AbhinavJha.jpg",
      name: "Abhinav Jha",
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
      name: "Saksham Goel",
      position: "Event Manager"
    }
  ]
  const SeniorArr = [
    {
      img: "FahadSiddiqui.jpg",
      name: "Fahad Siddiqui",
      position: "Ex DSC Lead"
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
    },
    {
      img: "SimranBhardwaj.jpg",
      name: "Simran Bhardwaj",
      position: "Web"
    },
    {
      img: "ShobhitGarg.jpeg",
      name: "Shobhit Garg",
      position: "Web"
    },
    {
      img: "ShikharSharma.jpeg",
      name: "Shikhar Sharma",
      position: "Web"
    },
    {
      img: "AbhirRajShrivastava.png",
      name: "Abhir Raj Shrivastava",
      position: "Web"
    },
    {
      img: "AditriSrivastava.jpg",
      name: "Aditri Srivastava",
      position: "Web"
    },
    {
      img: "SomyaGupta.jpg",
      name: "Somya Gupta",
      position: "Web"
    },
    {
      img: "AnmolGupta.jpeg",
      name: "Anmol Gupta",
      position: "ML"
    },
    {
      img: "VineetJain.jpg",
      name: "Vineet Jain",
      position: "ML"
    },
    {
      img: "ManasDalakoti.jpeg",
      name: "Manas Dalakoti",
      position: "ML"
    },
    {
      img: "VedanshSharma.jpg",
      name: "Vedansh Sharma",
      position: "ML"
    },
    {
      img: "BhanutejaG.jpg",
      name: "Bhanuteja G",
      position: "Mobile"
    }
    ,
    {
      img: "AshutoshAgarwal.jpg",
      name: "Ashutosh Agarwal",
      position: "Mobile"
    },
    {
      img: "HarshitGarg.jpg",
      name: "Harshit Garg",
      position: "CP"
    },
    {
      img: "TusharGoyal.jpg",
      name: "Tushar Goyal",
      position: "CP"
    },
    {
      img: "AnishKhare.jpg",
      name: "Anish Khare",
      position: "Cyber Security"
    },
    {
      img: "HardikAgarwal.jpg",
      name: "Hardik Agarwal",
      position: "UI/UX Design"
    }
  ];
  const managementTeam = [
    // {
    //   img: "cat2.gif",
    //   name: "Aditya Dahiya",
    //   position: "PR Head"
    // },
    // {
    //   img: "cat2.gif",
    //   name: "Megha Singhal",
    //   position: "PR Member"
    // },
    {
      img: "Gaurav.jpeg",
      name: "Gaurav Sharan",
      position: "PR Member"
    },
    {
      img: "Ishanjain.jpg",
      name: "Ishan Jain",
      position: "Event Manager"
    },
    {
      img: "ShriyanshiSrivastava.jpg",
      name: "Shriyanshi Srivastava",
      position: "Event Manager"
    },
    {
      img: "AnishKhare.jpg",
      name: "Anish Khare",
      position: "Event Manager"
    }
    
  ];
  const socialMedia = [
    {
      img: "ShikharGupta.jpg",
      name: "Shikhar Gupta",
      position: "Social Media Manager"
    },
    {
      img: "AdityaSingh.jpg",
      name: "Aditya Singh",
      position: "Social Media Manager"
    }
  ];
  // const photoTeam = [
  //   {
  //     img: "ShantanuGoyal.jpg",
  //     name: "Shantanu Goyal",
  //     position: "Photography"
  //   }
  // ];

  const contentTeam = [
    {
      img: "AryamanKumar.jpeg",
      name: "Aryaman Kumar",
      position: "Content Writer"
    },
    {
      img: "AbhirRajShrivastava.png",
      name: "Abhir Raj Shrivastava",
      position: "Content Writer"
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

        {/* <Box className="team-sections">
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
        </Box> */}

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
              Our Mentors{" "}
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

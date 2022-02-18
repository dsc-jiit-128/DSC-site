import React from "react";
import { Typography, Container, Box, Grid, Button } from "@material-ui/core";
import Member from "./MemberCard";
// import profileIcon from "../../images/profileAvatar.jpg";
// import Img from "../import_image/importImage.js";

const Speaker = ({ dark }) => {
  const speakerArr = [
    {
      img: "AyushSing.png",
      social: "https://www.linkedin.com/in/alphaayush",
    },
    {
      img: "RangaK .png",
      social: "https://www.linkedin.com/in/rangakaranam/",
    },
    {
      img: "DebasmitaSarkar.png",
      social: "https://www.linkedin.com/in/debasmita-s-22296bb2/",
    },
    {
      img: "google speaker.jpeg",
      social: "https://www.linkedin.com/in/avisek-lahiri-phd-9b240748",
    },
  ];

  return (
    <div>
      <Container className="mt-9">
        <Box className="team-sections">
          <Typography
            variant="h3"
            align="center"
            component="p"
            className="dsc-font"
            data-aos="flip-left"
          >
            <span>Our Speakers</span>
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className="marginTop padB"
            spacing={10}
          >
            {speakerArr.map((val) => (
              <Grid className="speaker-grid" data-aos="zoom-out">
                <Member img={val.img} social={val.social} dark={dark} />
              </Grid>
            ))}
            {/* <Typography
                        variant="h5"
                        align="center"
                        component="p"
                        className="dsc-font"
                        data-aos="flip-left"
                        style={{padding: "50px 0px"}}
                        >
                            Coming Soon
                        </Typography> */}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Speaker;

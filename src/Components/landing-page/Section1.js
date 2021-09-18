import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import cosmic from "../../images/cosmic-noBG.gif";
import dscjiit from "../../images/dsc_logo.png";
import dscjiitDark from "../../images/dsc_logo.png";
import Box from "@material-ui/core/Box";
import { Typography, Button } from "@material-ui/core";

const Section1 = ({isDark}) => {
  return (
    <div>
      <Box className="mt-9">
        <Grid container spacing={3}>
          <Grid item sm={12} md={6} lg={6}>
            <img
              data-aos="fade-top"
              className="first-image"
              src={cosmic}
              alt="searching"
            ></img>
          </Grid>
          <Grid item sm={12} md={6} lg={6} data-aos="fade-bottom">
            <Box mt={8}>
              <img
                className="first-image"
                src={isDark?dscjiitDark:dscjiit}
                alt="dscjiitlogo"
              ></img>
              <Box mt={2}>
                <Container>
                  <Typography component="p" variant="body1" align="left">
                    GDSC(Google Developers Student Club) - JIIT128 is a Google Developers program aimed for college students to help them build their mobile, web, machine learning, cloud skills, etc. We are basically a community with connections all over the world. 
                    Open to any student, ranging from novice developers who are just starting, to advanced developers who want to further enhance their skills, we provide a platform for students to learn and collaborate in solving problems around them with the help of technology.

                  </Typography>

                  <a href="https://dscjiit128.studio/#/bitbox" style={{color: "inherit", textDecoration: "none"}}> 
                  <Button
                      data-aos="fade-up"
                      className='mt-9 hero-btn mentor-btn'
                      variant='contained'
                      color='primary'
                      style={{ background: '#35A853', margin: '2rem 4rem 2rem 0', display:'block' }}
                  >
                  Register for Bitbox
                  </Button>
                  </a>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Section1;

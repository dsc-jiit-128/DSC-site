import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import StudyJamImage from "../../images/studyjam.jpeg";
import ExploreMLImage from "../../images/exploreML.jpeg";
import WorkshopsImage from "../../images/workshops.jpeg";

const Section3 = () => {
  return (
    <Box my={8}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4} lg={4}>
          <Card>
            <CardActionArea>
              <img className="card-img" src={StudyJamImage} alt="studyjam" />
              <CardContent>
                <Typography component="p" variant="h4" align="left">
                  Cloud Study Jam
                </Typography>
                <Typography component="p" variant="body1" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="section-2-paper">
              <Button
                variant="outlined"
                onClick={() => {
                  window.location = "/studyjam";
                }}
              >
                Insights
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Card>
            <CardActionArea>
              <CardContent>
                <img
                  className="card-img"
                  src={WorkshopsImage}
                  alt="workshops"
                />

                <Typography component="p" variant="h4" align="left">
                  Workshops
                </Typography>
                <Typography component="p" variant="body1" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="section-2-paper">
              <Button
                variant="outlined"
                onClick={() => {
                  window.location = "/highlights";
                }}
              >
                Insights
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={12} md={4} lg={4}>
          <Card>
            <CardActionArea>
              <img className="card-img" src={ExploreMLImage} alt="exploreml" />
              <CardContent>
                <Typography component="p" variant="h4" align="left">
                  Explore ML
                </Typography>
                <Typography component="p" variant="body1" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="section-2-paper">
              <Button
                variant="outlined"
                onClick={() => {
                  window.location = "/explore-ml";
                }}
              >
                Insights
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;

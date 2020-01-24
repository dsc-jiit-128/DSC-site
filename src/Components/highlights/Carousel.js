import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import eML1 from "../../images/exploreML/1.jpeg";
import eML2 from "../../images/exploreML/2.jpeg";
import eML3 from "../../images/exploreML/3.jpeg";
import eML4 from "../../images/exploreML/4.jpeg";
import eML5 from "../../images/exploreML/5.jpeg";

const tutorialSteps = {
  event: [
      {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
          "https://img.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg?size=338&ext=jpg"
      },
      {
        label: "Bird",
        imgPath:
          "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
      },
      {
        label: "Bali, Indonesia",
        imgPath:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
      },
      {
        label: "NeONBRAND Digital Marketing, Las Vegas, United States",
        imgPath:
          "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
      },
      {
        label: "Goč, Serbia",
        imgPath:
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
      }
    ],
  exploreML: [
      {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
          {eML1}
      },
      {
        label: "Bird",
        imgPath:
          {eML2}
      },
      {
        label: "Bali, Indonesia",
        imgPath:
          {eML3}
      },
      {
        label: "NeONBRAND Digital Marketing, Las Vegas, United States",
        imgPath:
          {eML4}
      },
      {
        label: "Goč, Serbia",
        imgPath:
          "{eML5}"
      }
    ]
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    overflow: "hidden",
    display: "block",
    width: "100%"
  }
}));

export default function TextMobileStepper(props) {
  const eventName = props.name;
  const array = Object.entries(tutorialSteps);
  var images = [];
  array.forEach(([key,value])=>{
    if(key===eventName) {
      images= value;
    }
  });
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.event.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography className="dsc-font">
          {images[activeStep].label}
        </Typography>
      </Paper>
      <img
        className={classes.img}
        src={images[activeStep].imgPath}
        alt={images[activeStep].label}
      />
      <MobileStepper
        className="dsc-font"
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

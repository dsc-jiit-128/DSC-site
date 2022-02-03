import { Typography, Container, Button, Box } from "@material-ui/core";
import CommunityPartners from "./bitbox2/CommunityPartners";
import Sponsers from "./bitbox2/Sponsor";
import React, { useEffect } from "react";
import Kaleidoscope from "ak-kaleidoscope";
import Section4 from "../landing-page/Section4";
import Theme from "./Theme";
import SponsorUs from "./SponsorUs";
import Sessions from "./bitbox2/Sessions";
import FAQ from "./FAQ";
import "./bitbox.scss";
import "./bitbox2.scss";
import Schedule from "./bitbox2/Schedule";

export default function BitBox({ isDark }) {
  useEffect(() => {
    new Kaleidoscope({
      selector: "#kaleidoscope",
      edge: 5,
      quantity: 15,
      shapes: ["line","circle", "drop", "oval", "square", "triangle", "wave"],
      color: ["#4285F4", "#EA4335", "#F8BC06", "#35A853"],
    });

    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div id="hero-section" style={{ height: "100vh" }}>
      <center>
        <canvas id="kaleidoscope"></canvas>
        <Container fixed className="hero-container">
          <Typography
            variant="h1"
            component="h1"
            align="center"
            className="box-font margintopmax"
            style={isDark ? { color: "#fff" } : { color: "#292929" }}
          >
            BITBOX 2.0
          </Typography>

          <div style={isDark ? { color: "#fff" } : { color: "#000" }}>
            Google Developer Student Club JIIT-128 is pleased to announce that
            we are hosting our annual tech hackathon "BIT BOX" in the month of
            march for the students intrested, all over the world.
          </div>
          <div className="hero-btn-container">
            <Box
              style={{
                height: "100px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="apply-button"
                data-hackathon-slug="bitbox-2"
                data-button-theme="light"
                style={{ height: "44px", width: "312px" }}
              />
            </Box>
          </div>
        </Container>
        <div>
          <div
            className="frameContainer"
            style={isDark ? { color: "#fff" } : { color: "#000" }}
          >
            <div className="frameContainer">
              <iframe
                className="frameCard"
                src="https://www.youtube.com/embed/XJ7E5l2YfB0"
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div style={{ marginTop: "50px" }}></div>
          </div>
          
          <div className="heading">
            <Typography
              variant="p"
              align="center"
              component="p"
              className="dsc-font"
              data-aos="flip-left"
              style={{ paddingTop: "4rem" }}
            >
              <Schedule isDark={isDark} />
            </Typography>
          </div>
          <div className="heading">
            <Typography
              variant="h3"
              align="center"
              component="p"
              className="dsc-font"
              data-aos="flip-left"
              style={{ paddingTop: "4rem" }}
            >
              Speakers and Judges
            </Typography>
            To be announced
          </div>
          <div className="heading">
            <Typography
              variant="h3"
              align="center"
              component="p"
              className="dsc-font"
              data-aos="flip-left"
              style={{ paddingTop: "4rem" }}
            >
              Prizes
            </Typography>
            To be announced
          </div>
        </div>
        <Theme />
        <Sponsers isDark={isDark} />
        <br />
        <br />
        <CommunityPartners isDark={isDark} />
        <SponsorUs isDark={isDark} />
      </center>
      <FAQ />
      <Container id="contact">
        <Section4 isDark={isDark} />
      </Container>
      {/*
      <Container fixed className='hero-container'>
        <Typography
          variant='h1'
          component='h1'
          className='box-font margintopmax'
          style={isDark ? { color: '#fff' } : {}}
          align='center'>
          BITBOX 2.0
        </Typography>
        
      </Container>
      
    {' '} */}
    </div>
  );
}

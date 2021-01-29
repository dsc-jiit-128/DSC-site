import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import Member from "./MemberCard";
// import profileIcon from "../../images/profileAvatar.jpg";
// import Img from "../import_image/importImage.js";

export default function Speakers() {
    const speakerArr = [
        {
            img: "UtkarshPandey.jpg",
            name: "Utkarsh Pandey",
            position: "Technical Lead"
        }
    ]

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
                        <span>
                            Our Speakers
                        </span>
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                    >
                        {speakerArr.map(val => (
                            <Grid>
                                <Member img={val.img} name={val.name} position={val.position} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};


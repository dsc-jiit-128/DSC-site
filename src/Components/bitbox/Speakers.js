import React from "react";
import { Typography, Container, Box, Grid, Button } from "@material-ui/core";
import Member from "./MemberCard";
// import profileIcon from "../../images/profileAvatar.jpg";
// import Img from "../import_image/importImage.js";

const Speaker = ({ dark }) => {
    const speakerArr = [
        {
            img: "UtkarshPandey.jpg",
            name: "Utkarsh Pandey",
            position: "Technical Lead",
            social: {
                facebook: "https://www.facebook.com/utkarsh.pandey.1000",
                insta: "https://www.instagram.com",
                linkedin: "https://www.linkedin.com/in/NeoAnoman/"
            },
            webinar: "Some Webinar info here..."
        },
        {
            img: "UtkarshPandey.jpg",
            name: "Utkarsh Pandey",
            position: "Technical Lead",
            social: {
                facebook: "https://www.facebook.com/utkarsh.pandey.1000",
                insta: "https://www.instagram.com",
                linkedin: "https://www.linkedin.com/in/NeoAnoman/"
            },
            webinar: "Some Webinar info here..."
        },
        {
            img: "UtkarshPandey.jpg",
            name: "Utkarsh Pandey",
            position: "Technical Lead",
            social: {
                facebook: "https://www.facebook.com/utkarsh.pandey.1000",
                insta: "https://www.instagram.com",
                linkedin: "https://www.linkedin.com/in/NeoAnoman/"
            },
            webinar: "Some Webinar info here..."
        },
        {
            img: "UtkarshPandey.jpg",
            name: "Utkarsh Pandey",
            position: "Technical Lead",
            social: {
                facebook: "https://www.facebook.com/utkarsh.pandey.1000",
                insta: "https://www.instagram.com",
                linkedin: "https://www.linkedin.com/in/NeoAnoman/"
            },
            webinar: "Some Webinar info here..."
        },
        {
            img: "UtkarshPandey.jpg",
            name: "Utkarsh Pandey",
            position: "Technical Lead",
            social: {
                facebook: "https://www.facebook.com/utkarsh.pandey.1000",
                insta: "https://www.instagram.com",
                linkedin: "https://www.linkedin.com/in/NeoAnoman/"
            },
            webinar: "Some Webinar info here..."
        }
    ]

    return (
        <div>
            <Container className="mt-9">
                <Button
                data-aos="fade-left"
                className='mt-9 hero-btn mentor-btn'
                onClick={(e) => {
                e.preventDefault();
                    window.location.href ='https://forms.gle/maWHurP4MZfc9eZc9';
                }}
                variant='contained'
                color='primary'
                style={{ background: '#35A853', margin: '2rem auto', display:'block' }}
            >
                Become A Mentor
            </Button>
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
                        spacing={10}
                    >
                        {speakerArr.map(val => (
                            <Grid className="speaker-grid">
                                <Member img={val.img} name={val.name} position={val.position} social={val.social} webinar={val.webinar} dark={dark} />
                            </Grid>
                        ))}
                        {/* <Typography
                        variant="h5"
                        align="center"
                        component="p"
                        className="dsc-font"
                        data-aos="flip-left"
                    >
                    </Typography> */}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Speaker;
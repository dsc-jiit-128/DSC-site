import React from "react";
import { Typography, Container, Box, Grid, Button } from "@material-ui/core";
import Member from "./MemberCard";
// import profileIcon from "../../images/profileAvatar.jpg";
// import Img from "../import_image/importImage.js";

const Speaker = ({ dark }) => {
    const speakerArr = [
        {
            img: 'Vrijraj Singh GDE.jpg',
            name: 'Vrijraj Singh',
            position: 'Organizer, GDG Jalandhar | GDE for Web & Firebase',
            social: 'https://www.linkedin.com/in/vrijrajsingh',
            webinar: 'Web Technologies'
        },
        {
            img: 'Chintan.jpg',
            name: 'Chintan Parmar',
            position: 'Android Developer | Organizer, Kotlin Mumbai',
            social: 'https://www.linkedin.com/in/chintanrparmar/',
            webinar: 'Kotlin'
        },
        {
            img: 'Akhil.jpg',
            name: 'Akhil Bharati',
            position: 'Senior Software Engineer, Tezos India',
            social: 'https://www.linkedin.com/in/akhil-bharti-17161272/',
            webinar: 'Blockchain'
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
                    window.location.href ='https://discord.gg/Dy3MVM2';
                }}
                variant='contained'
                color='primary'
                style={{ background: '#7289da', margin: '2rem auto', display:'block' }}
            >
                Join our Discord Server
            </Button>
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
                        className="marginTop"
                        spacing={10}
                    >
                        {
                        speakerArr.map(val => (
                            <Grid className="speaker-grid" data-aos="zoom-out">
                                <Member img={val.img} name={val.name} position={val.position} social={val.social} webinar={val.webinar} dark={dark} />
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
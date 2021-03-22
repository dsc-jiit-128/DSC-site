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
        },
        {
            img: 'aditya.png',
            name: 'Aditya Oberai',
            position: 'Imagine Cup 2021 National Winner - Education | MLH Coach | Gold Microsoft Learn Student Ambassador',
            social: 'https://www.linkedin.com/in/ACoAABSeMbQBA0_-ma8QqJPVALH9nFx7ycs1lpg/',
            webinar: 'What is a Hackathon and How to be best at it?'
        },
        {
            img: 'yash.jpg',
            name: 'Yash Khare',
            position: 'Member and mentor at amFOSS',
            social: 'https://www.linkedin.com/in/yashk2000/',
            webinar: 'What is a Hackathon and How to be best at it?'
        },
        {
            img: 'pragati.jpg',
            name: 'Pragati Verma',
            position: 'MLH Fellow | DSC Lead | InOut 7.0 Winner | SIH2020 Winner | MLSA 2020/21',
            social: 'https://www.linkedin.com/in/pragativerma18/',
            webinar: 'What is a Hackathon and How to be best at it?'
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
            {/* <Button
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
            </Button> */}
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
                        className="marginTop padB"
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
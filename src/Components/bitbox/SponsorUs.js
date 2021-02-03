import React from 'react';
import { Typography, Button } from "@material-ui/core";

const SponsorUs = (props)=>{
    return (
        <div>
            <Typography
                variant="h3"
                align="center"
                component="p"
                className="dsc-font"
                data-aos="flip-left"
                style={{paddingTop: "4rem"}}
            >
                Sponsor Us
            </Typography>
            <a href="mailto:dscjiit128@mail.jiit.ac.in" style={{color: "inherit", textDecoration: "none"}}> 
            <Button
                data-aos="fade-up"
                className='mt-9 hero-btn mentor-btn'
                variant='contained'
                color='primary'
                style={{ background: '#35A853', margin: '2rem auto 8rem auto', display:'block' }}
            >
            Email Us
            </Button>
            </a>
        </div>
    );
}

export default SponsorUs;
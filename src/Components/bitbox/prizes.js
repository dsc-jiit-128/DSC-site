import React from 'react';
import Prizecard from './prizecard';
import { Typography, Grid } from '@material-ui/core';

export default function Prizes() {

    const prizeArr = [{
            image: '1',
            heading: 'First Prize',
            desc: [
                'You get 10,00,000 rupees. Just Kidding LOL :p',
                'You get 10,00,000 rupees. Just Kidding LOL :p',
                'You get 10,00,000 rupees. Just Kidding LOL :p',
                'You get 10,00,000 rupees. Just Kidding LOL :p',
                'You get 10,00,000 rupees. Just Kidding LOL :p',
                'You get 10,00,000 rupees. Just Kidding LOL :p',
                'You get 10,00,000 rupees. Just Kidding LOL :p',
                'You get 10,00,000 rupees. Just Kidding LOL :p'
            ]
        },
        {
            image: '2',
            heading: 'Second Prize',
            desc: [
                'You get 5,00,000 rupees. Just Kidding LOL :p',
                'You get 5,00,000 rupees. Just Kidding LOL :p',
                'You get 5,00,000 rupees. Just Kidding LOL :p',
                'You get 5,00,000 rupees. Just Kidding LOL :p',
                'You get 5,00,000 rupees. Just Kidding LOL :p',
                
            ]
        },
        {
            image: '3',
            heading: 'Third Prize',
            desc: [
                'You get 1,00,000 rupees. Just Kidding LOL :p',
                'You get 1,00,000 rupees. Just Kidding LOL :p',
                'You get 1,00,000 rupees. Just Kidding LOL :p'
                
            ]
        },
        
    ]
    return (
        <div className="margintop">
            <Typography
                variant="h3"
                align="center"
                component="p"
                className="dsc-font"
                data-aos="flip-left"
            >
                <span>
                    Prizes
                        </span>
            </Typography>
            <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                alignContent="center"
                data-aos="flip-up"
            >
                {/* {prizeArr.map(val => (
                    <Grid xs={12} md={4} 
                        direction="row"
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                        spacing={10} className="margintop flexdisp">
                        <Prizecard image={val.image} head={val.heading} desc={val.desc} />
                    </Grid>
                ))} */}
                <Typography
                    variant="h5"
                    align="center"
                    component="p"
                    className="dsc-font"
                    data-aos="flip-left"
                    style={{padding: "50px 0px"}}
                    >
                        Coming Soon
                </Typography>
            </Grid>
        </div>
    );
}

// export default Prizes;
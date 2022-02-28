import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@material-ui/core';
import Member from './JudgesCard'

const Judges = ({ dark }) => {
  const speakerArr = [
    {
      img: 'AyushSing.png',
      social: 'https://www.linkedin.com/in/alphaayush',
    },
    {
        img: 'AyushSing.png',
        social: 'https://www.linkedin.com/in/alphaayush',
    },
    {
        img: 'AyushSing.png',
        social: 'https://www.linkedin.com/in/alphaayush',
    },

  ];

  return (
    <div>
      <Container className='mt-9'>
        <Box className='team-sections'>
          <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'
            className='marginTop padB'
            spacing={10}>
            {speakerArr.map((val) => (
              <Grid className='speaker-grid' data-aos='zoom-out'>
                <Member img={val.img} social={val.social} dark={dark} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Judges;

import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@material-ui/core';
import Member from './JudgesCard'

const Judges = ({ dark }) => {
  const speakerArr = [
    {
      img: 'Shikha.jpeg',
      social: 'https://www.jiit.ac.in/dr-shikha-mehta',
    },
    {
      img: 'Shruti.jpeg',
      social: 'https://www.jiit.ac.in/dr-shruti-jaiswal',
    },
    {
      img: 'Varsha.jpeg',
      social: 'https://www.jiit.ac.in/varsha-garg',
    },
    {
      img: 'Abhinav.jpeg',
      social: 'https://www.linkedin.com/in/abhinavsri360/',
    },
    {
      img: 'Rohan.jpeg',
      social: 'https://www.linkedin.com/in/rsrohanverma/',
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

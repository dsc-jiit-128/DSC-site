import React, { useEffect } from 'react';
import Kaleidoscope from 'ak-kaleidoscope';
import { Typography, Container, Button } from '@material-ui/core';


export default function Hero() {
  useEffect(() => {
    new Kaleidoscope({
      selector: '#kaleidoscope',
      edge: 5,
      quantity: 20,
      shapes: ['circle', 'drop', 'oval', 'square', 'star', 'triangle', 'wave'],
      color : ['#4285F4','#EA4335','#F8BC06', '#35A853']
    });
  });
  return (
    <div id='hero-section' className='' style={{ height: '100vh' }}>
      <canvas id='kaleidoscope' ></canvas>
        <Container fixed className='hero-container'>
      <Typography
        variant='h1'
        component='h1'
        className='box-font'
        align='center'
        data-aos="zoom-in-up"
      >
        BITBOX
      </Typography>
      <div fixed className='hero-btn-container' >
       <Button
            data-aos="fade-right"
            className='mt-9 hero-btn register-btn'
            variant='contained'
            color='primary'
            style={{ background: '#4285F4', margin: '2rem auto', display:'block' }}
          >
            Coming Soon !!
          </Button>
          <Button
            data-aos="fade-left"
            className='mt-9 hero-btn mentor-btn'
            onClick={(e) => {
              e.preventDefault();
              window.location.href='mailto:dscjiit128@gmail.com';
              }}
            variant='contained'
            color='primary'
            style={{ background: '#35A853', margin: '2rem auto', display:'block' }}
          >
            Become A Mentor
          </Button>
      </div>
      </Container>
    </div>
  );
}

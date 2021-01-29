import React, { useEffect } from 'react';
import Kaleidoscope from 'ak-kaleidoscope';
import { Typography, Container, Button, Box } from '@material-ui/core';


export default function Hero({isDark}) {
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
        style={isDark?{color:'#fff'}:{}}
        align='center'
        data-aos="zoom-in-up"
      >
        BITBOX
      </Typography>
      <div fixed className='hero-btn-container' >
        <Box style={{height:"100px", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
          {/* TODO:: change the slug */}
            <div 
            className="apply-button" 
            data-hackathon-slug="YOUR-HACKATHON-SLUG" 
            data-button-theme= "light"
            style={{height: "44px", width: "312px"}}
            ></div>
        </Box>
          {/* <Button
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
          </Button> */}
      </div>
      </Container>
    </div>
  );
}

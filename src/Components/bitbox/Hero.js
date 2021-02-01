import React, { useEffect } from 'react';
import Kaleidoscope from 'ak-kaleidoscope';
import { Typography, Container, Box } from '@material-ui/core';
import Countdown from './countdown'


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
    <div id='hero-section' className='' style={{ height: '150vh' }}>
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
      <Countdown isDark={isDark}/>
      <div fixed className='hero-btn-container' >
        <Box style={{height:"100px", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
          {/* TODO:: change the slug */}
            <div 
              className="apply-button" 
              data-hackathon-slug="YOUR-HACKATHON-SLUG" 
              data-button-theme= "light"
              style={{height: "44px", width: "312px"}}
             />
        </Box>
      </div>
      </Container>
    </div>
  );
}

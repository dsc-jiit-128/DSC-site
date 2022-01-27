import React, { useEffect } from 'react';
import Kaleidoscope from 'ak-kaleidoscope';
import { Typography, Container, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Countdown from './countdown';

export default function Hero({ isDark }) {
  useEffect(() => {
    new Kaleidoscope({
      selector: '#kaleidoscope',
      edge: 5,
      quantity: 20,
      shapes: ['circle', 'drop', 'oval', 'square', 'star', 'triangle', 'wave'],
      color: ['#4285F4', '#EA4335', '#F8BC06', '#35A853'],
    });
  }, []);
  return (
    <div id='hero-section' className='' style={{ height: '175vh' }}>
      <canvas id='kaleidoscope'></canvas>
      <Container fixed className='hero-container'>
        <Typography
          variant='h1'
          component='h1'
          className='box-font margintopmax'
          style={isDark ? { color: '#fff' } : {}}
          align='center'>
          BITBOX
        </Typography>
        <h2 style={{ fontFamily: 'Great Vibes', textAlign: 'center' }}>
          Memories '21
        </h2>
        {/* <Countdown isDark={isDark} /> */}
        <div className='hero-btn-container'>
          <Box
            style={{
              height: '100px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            {/* <button id="devfolio-apply-now"><svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff"viewBox="0 0 115.46 123.46" style={{height:"24px", width: "24px", marginRight: "8px"}}><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" /><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>Apply with Devfolio</button> */}
            {/* <Button
              variant='outlined'
              color='primary'
              style={{ marginTop: '10px' }}
              onClick={() => {
                window.location = '#/photobooth';
              }}>
              Get Your Profile Badge
            </Button> */}
          </Box>
        </div>
        <div className='frameContainer'>
          <iframe
            className='frameCard'
            src='https://www.youtube-nocookie.com/embed/wR0O8FMLm7c'
            title='YouTube video player'
            frameborder='1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>
      </Container>
    </div>
  );
}

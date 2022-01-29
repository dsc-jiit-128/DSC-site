import { Typography, Container, Button, Box } from '@material-ui/core';
import Bitbox from '../../images/sponsors/bitbox2/bitbox_logo.png';
import CommunityPartners from './bitbox2/CommunityPartners';
import Sponsers from './bitbox2/Sponsor';
import React, { useEffect } from 'react';
import Kaleidoscope from 'ak-kaleidoscope';
import Section4 from '../landing-page/Section4';
import Theme from './Theme';
import SponsorUs from './SponsorUs';
import Sessions from './bitbox2/Sessions';
import FAQ from './FAQ';
import './bitbox.scss';
import './bitbox2.scss';

export default function BitBox({ isDark }) {
  useEffect(() => {
    new Kaleidoscope({
      selector: '#kaleidoscope',
      edge: 5,
      quantity: 20,
      shapes: ['circle', 'drop', 'oval', 'square', 'star', 'triangle', 'wave'],
      color: ['#4285F4', '#EA4335', '#F8BC06', '#35A853'],
    });

    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div id='hero-section' style={{ height: '175vh' }}>
      <center>
        <canvas id='kaleidoscope'></canvas>
        <Container fixed className='hero-container'>
          <Typography
            variant='h1'
            component='h1'
            align='center'
            className='box-font margintopmax'
            style={isDark ? { color: '#fff' } : { color: '#292929' }}>
            BITBOX 2.0
          </Typography>

          <div style={isDark ? { color: '#fff' } : { color: '#000' }}>
            Google Developer Student Club JIIT-128 is pleased to announce that
            we are hosting our annual tech hackathon "BIT BOX" in the month of
            march for the students intrested, all over the world.
          </div>
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
              {/* <div
                className='apply-button'
                data-hackathon-slug='bitbox2.0'
                data-button-theme='light'
                style={{ height: '44px', width: '312px' }}
              /> */}
              <button id='devfolio-apply-now'>
                <svg
                  class='logo'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#fff'
                  viewBox='0 0 115.46 123.46'
                  style={{ height: '24px', width: '24px', marginRight: '8px' }}>
                  <path d='M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z' />
                  <path d='M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z' />
                </svg>
                Apply with Devfolio
              </button>
            </Box>
          </div>
          <div
            className='frameContainer'
            style={isDark ? { color: '#fff' } : { color: '#000' }}>
            {/* <p>Check out the info session here!!</p>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/wlXCgup_w4Y'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe> */}
            <img className='bitbox-logo' src={Bitbox} alt='Bitbox logo' />
            <div style={{ marginTop: '50px' }}></div>

            <Button
              className='mt-9 hero-btn mentor-btn'
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://discord.gg/Dy3MVM2';
              }}
              variant='contained'
              color='primary'
              style={{
                background: '#7289da',
                margin: '2rem auto',
                display: 'block',
              }}>
              Join our Discord Server
            </Button>
            <button
              className='bitbox1'
              onClick={() => {
                window.location = '#/bitbox1';
              }}>
              Bit Box 2021 Memories
            </button>
          </div>
        </Container>
        <div>
          <div className='heading'>
            <Typography
              variant='h3'
              align='center'
              component='p'
              className='dsc-font'
              data-aos='flip-left'
              style={{ paddingTop: '4rem' }}>
              Sessions
            </Typography>
            <Sessions />
          </div>
          <div className='heading'>
            <Typography
              variant='h3'
              align='center'
              component='p'
              className='dsc-font'
              data-aos='flip-left'
              style={{ paddingTop: '4rem' }}>
              Speakers and Judges
            </Typography>
            To be announced
          </div>
          <div className='heading'>
            <Typography
              variant='h3'
              align='center'
              component='p'
              className='dsc-font'
              data-aos='flip-left'
              style={{ paddingTop: '4rem' }}>
              Prizes
            </Typography>
            To be announced
          </div>
        </div>
        <Theme />
        <Sponsers isDark={isDark} />
        <br />
        <br />
        <CommunityPartners />
        <SponsorUs />
      </center>
      <FAQ />
      <Container id='contact'>
        <Section4 isDark={isDark} />
      </Container>
      {/*
      <Container fixed className='hero-container'>
        <Typography
          variant='h1'
          component='h1'
          className='box-font margintopmax'
          style={isDark ? { color: '#fff' } : {}}
          align='center'>
          BITBOX 2.0
        </Typography>
        
      </Container>
      
    {' '} */}
    </div>
  );
}

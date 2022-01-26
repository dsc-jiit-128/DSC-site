import { Typography, Container, Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-dom';
import Kaleidoscope from 'ak-kaleidoscope';
import Section4 from '../landing-page/Section4';
import Theme from './Theme';
import SponsorUs from './SponsorUs';
import FAQ from './FAQ';
import './bitbox.scss';
import './bitbox2.scss';

export default function BitBox({ isDark }) {
  const history = useHistory();
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
    <div className='bitbox' id='hero-section' style={{ height: '100vh' }}>
      <canvas id='kaleidoscope'></canvas>
      <Container fixed className='hero-container'>
        <Typography
          variant='h1'
          component='h1'
          className='box-font margintopmax'
          style={isDark ? { color: '#fff' } : {}}
          align='center'>
          BITBOX 2.0
        </Typography>
        <div>
          Google Developer Student Club JIIT-128 is pleased to announce that we
          are hosting our annual tech hackathon "BIT BOX" in the month of march
          for the students intrested, all over the world.
        </div>
        <button className='bitbox1' onClick={history.push('#/bitbox1')}>
          Bitbox 2020 Memories
        </button>
      </Container>
      <Theme />
      <SponsorUs />
      <div>
        <div>
          <u>Sessions</u>
        </div>
        <div>
          <u>Speakers and Judges</u>
        </div>
        <div>
          <u>Prizes</u>
        </div>
        <div>
          <u>Community Partners</u>
        </div>
      </div>
      <FAQ />
      <Container id='contact'>
        <Section4 isDark={isDark} />
      </Container>
    </div>
  );
}

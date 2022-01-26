import React from 'react';
import Hero from './Hero';
import Schedule from './Schedule';
import Sponsor from './Sponsor';
import Speakers from './Speakers';
import Prizes from './prizes';
import Theme from './Theme';
import SponsorUs from './SponsorUs';
import CommunityPartners from './CommunityPartners';
import { Container } from '@material-ui/core';
import Section4 from '../landing-page/Section4';
import './bitbox.scss';
export default function bitbox1({ isDark }) {
  return (
    <div>
      <Hero isDark={isDark} />
      <Speakers dark={isDark} />
      <Prizes isDark={isDark} />
      <Schedule isDark={isDark} />
      <Theme />
      <Sponsor isDark={isDark} />
      <SponsorUs />
      <CommunityPartners isDark={isDark} />
      <Container id='contact'>
        <Section4 isDark={isDark} />
      </Container>
    </div>
  );
}

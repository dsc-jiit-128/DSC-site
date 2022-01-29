import React from 'react';
import { Typography, Grid, Container, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import SponsorCard from '../SponsorCard';

export default function Sponsor(props) {
  let history = useHistory();

  return (
    <div className='sponsors'>
      <Typography
        data-aos='flip-down'
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'>
        Our Proud Sponsors
      </Typography>
      <Typography
        data-aos='flip-down'
        variant='h5'
        component='p'
        className='dsc-font margintop'
        align='center'>
        Sponsors
      </Typography>
      <div className='sponsor-container'>
        <SponsorCard
          key='0'
          src={require('../../../images/sponsors/devfolio-light.png')}
          link='https://devfolio.co'
        />
        <SponsorCard
          key='3'
          src={require('../../../images/sponsors/bitbox2/leading-learner.svg')}
          link='https://www.leadlearners.ca/'
        />
        <SponsorCard
          key='3'
          src={require('../../../images/sponsors/wolfram2.png')}
          link='http://wolfram.com/'
        />
      </div>
      <Typography
        data-aos='flip-down'
        variant='h5'
        component='p'
        className='dsc-font margintop'
        align='center'>
        Co-Sponsors
      </Typography>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'>
        <SponsorCard
          key='0'
          src={require('../../../images/sponsors/matic-light.png')}
          link='https://matic.network'
        />
        <SponsorCard
          key='5'
          src={require('../../../images/sponsors/StreamYard - Horz.png')}
          link='https://streamyard.com/'
        />
        <SponsorCard
          key='3'
          src={require('../../../images/sponsors/GMC_logo.png')}
          link='http://givemycertificate.com/'
        />
      </Grid>
      <Typography
        data-aos='flip-down'
        variant='h5'
        component='p'
        className='dsc-font margintop'
        align='center'>
        Internship Partner
      </Typography>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'>
        <SponsorCard
          key='1'
          src={require('../../../images/sponsors/bitbox2/heiphen.svg')}
          link=''
        />
      </Grid>
    </div>
  );
}

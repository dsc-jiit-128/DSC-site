import React from 'react';
import { Typography, Button, Container, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import SponsorCard from './SponsorCard';


export default function Sponsor(props) {
  let history = useHistory();

  return (
    <div className='sponsors'>
      <Typography
      data-aos="flip-down"
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'
      >
        Our Proud Sponsors
      </Typography>
      <Typography
        data-aos="flip-down"
        variant='h5'
        component='p'
        className='dsc-font'
        align='center'
      >
        Associate Sponsors
      </Typography>
      <div className="sponsor-container">
        <SponsorCard key="0" src={require('../../images/sponsors/devfolio-light.png')} />
      </div>
      <Typography
        data-aos="flip-down"
        variant='h5'
        component='p'
        className='dsc-font'
        align='center'
      >
        Co-Sponsors
      </Typography>
      <div className="sponsor-container">
        <SponsorCard key="0" src={require('../../images/sponsors/matic-light.png')} />
        <SponsorCard key="1" src={require('../../images/sponsors/tezos-light.png')} />
        <SponsorCard key="2" src={require('../../images/sponsors/portis-light.png')} />
      </div>
    </div>
  );
}

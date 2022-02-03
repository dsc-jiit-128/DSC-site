import React from 'react';
import { Typography, Grid,} from '@material-ui/core';
import SponsorCard from '../SponsorCard';

export default function Sponsor({ isDark }) {
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
        Associate Sponsors
      </Typography>
      <div className='sponsor-container'>
        <SponsorCard
          key='0'
          src={require(!isDark
            ? '../../../images/sponsors/devfolio-light.png'
            : '../../../images/sponsors/bitbox2/Devfolio_Dark.png')}
          link='https://devfolio.co'
        />
        <SponsorCard
          key='1'
          src={require(!isDark
            ? '../../../images/sponsors/bitbox2/polygon_light.png'
            : '../../../images/sponsors/bitbox2/polygon_dark.png')}
          link='https://polygon.technology/'
        />
        <SponsorCard
          key='2'
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
          src={require(!isDark
            ? '../../../images/sponsors/bitbox2/tezos_light.png'
            : '../../../images/sponsors/bitbox2/tezos_dark.png')}
          link='https://tezos.com/'
        />
        <SponsorCard
          key='1'
          src={require(!isDark
            ? '../../../images/sponsors/bitbox2/celo_light.png'
            : '../../../images/sponsors/bitbox2/celo_dark.png')}
          link='https://celo.org/'
        />
        <SponsorCard
          key='2'
          src={require(!isDark
            ? '../../../images/sponsors/bitbox2/filecoin_light.png'
            : '../../../images/sponsors/bitbox2/filecoin_dark.png')}
          link='https://filecoin.io/'
        />
        <SponsorCard
          key='3'
          src={require('../../../images/sponsors/GMC_logo.png')}
          link='http://givemycertificate.com/'
        />
        <SponsorCard
          key='4'
          src={require('../../../images/sponsors/StreamYard - Horz.png')}
          link='https://streamyard.com/'
        />
        <SponsorCard
          key='5'
          src={require('../../../images/sponsors/bitbox2/Inter_cake.png')}
          link='https://www.interviewcake.com/'
        />
        <SponsorCard
          key='4'
          src={require('../../../images/sponsors/bitbox2/IBlogo.png')}
          link='https://interviewbuddy.in/'
        />
        <SponsorCard
          key='5'
          src={require('../../../images/sponsors/bitbox2/axure.png')}
          link='https://www.axure.com/'
        />
         <SponsorCard
          key='6'
          src={require('../../../images/sponsors/aops.jpeg')}
          link=''
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
          key='0'
          src={require('../../../images/sponsors/bitbox2/heiphen.svg')}
          link='https://heiphen.com/'
        />
      </Grid>
    </div>
  );
}

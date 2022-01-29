import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import CommunityCard from '../CommunityCard';

export default function CommunityPartners(props) {
  return (
    <div className='sponsors'>
      <Typography
        data-aos='flip-down'
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'>
        Community Partners
      </Typography>

      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'>
        <CommunityCard
          key='0'
          src={require('../../../images/sponsors/bitbox2/aurangabad-dsc.svg')}
          link=''
        />

        <CommunityCard
          key='1'
          src={require('../../../images/sponsors/bitbox2/dav-dsc.svg')}
          link=''
        />
        <CommunityCard
          key='2'
          src={require('../../../images/sponsors/bitbox2/dtiet-dsc.svg')}
        />
        <CommunityCard
          key='3'
          src={require('../../../images/sponsors/bitbox2/kalindi-dsc.svg')}
          link=''
        />
        <CommunityCard
          key='4'
          src={require('../../../images/sponsors/bitbox2/CodeChefVIT.svg')}
          link=''
        />
        <CommunityCard
          key='5'
          src={require('../../../images/sponsors/bitbox2/CodeChefIGDTUW.jpg')}
          link='https://instagram.com/codechef_igdtuw?utm_medium=copy_link'
        />
      </Grid>

      {/* <a href="https://forms.gle/CexfaeJN6Mx6jQNr6" target="_blank" style={{color: "inherit", textDecoration: "none"}}> 
        <Button
            data-aos="fade-up"
            className='mt-9 hero-btn mentor-btn'
            variant='contained'
            color='primary'
            style={{ background: '#ec407a', margin: '4rem auto 4rem auto', display:'block' }}
        >
        Become a Community Partner
        </Button>
        </a> */}
    </div>
  );
}

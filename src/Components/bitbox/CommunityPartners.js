import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import CommunityCard from './CommunityCard';


export default function CommunityPartners(props) {

  return (
    <div className='sponsors'>
      <Typography
      data-aos="flip-down"
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'
      >
        Community Partners
      </Typography>

      
      <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
      >
        <CommunityCard key="0" src={require('../../images/sponsors/dscLogo.png')} link="https://linktr.ee/developer_student_community" />
        <CommunityCard key="1" src={require('../../images/sponsors/codingculture.jpg')} link="http://thecodingculture.com/" />
        <CommunityCard key="2" src={props.isDark?require('../../images/sponsors/dscbvp-d.png'):require('../../images/sponsors/dscbvp.png')} link="http://official.dscbvp.dev/" />
        <CommunityCard key="3" src={require('../../images/sponsors/learn.png')} />
        <CommunityCard key="4" src={props.isDark?require('../../images/sponsors/HackNITR logo - Black.png'):require('../../images/sponsors/HackNITR logo.png')} link="http://hacknitr.tech/" />
        <CommunityCard key="5" src={props.isDark?require('../../images/sponsors/DSC Indraprastha College For Women Light Vertical-Logo-d.png'):require('../../images/sponsors/DSC Indraprastha College For Women Light Vertical-Logo.png')} link="https://dsc.community.dev/indraprastha-college-for-women/" />
        <CommunityCard key="6" src={props.isDark?require('../../images/sponsors/DSC Rustamji Institute of Technology Light Horizontal-Logo-d.png'):require('../../images/sponsors/DSC Rustamji Institute of Technology Light Horizontal-Logo.png')} link="https://dsc.community.dev/rustamji-institute-of-technology/" />
        <CommunityCard key="7" src={props.isDark?require('../../images/sponsors/Group 112-d.png'):require('../../images/sponsors/Group 112.png')} link="http://dscjss.in/" />
        <CommunityCard key="8" src={require('../../images/sponsors/dsc imsec 2.png')} link="https://dsc.community.dev/ims-engineering-college/" />
        <CommunityCard key="9" src={props.isDark?require('../../images/sponsors/DSC Birla Institute of Applied Sciences Light Vertical-Logo-d.png'):require('../../images/sponsors/DSC Birla Institute of Applied Sciences Light Vertical-Logo.png')} link="http://dsc.birlainstitute.co.in/" />
        <CommunityCard key="9" src={require('../../images/sponsors/DSC MKSSS\'s Cummins College of Engineering for Women Logo x1.png')} link="https://dsc.community.dev/mkssss-cummins-college-of-engineering-for-women/" />
        <CommunityCard key="10" src={props.isDark?require('../../images/sponsors/DSC CVR College of Engineering Logo Transparent-d.png'):require('../../images/sponsors/DSC CVR College of Engineering Logo Transparent.png')} link="https://tinyurl.com/dsccvr-hackathon" />
        
      </Grid>

      <a href="https://forms.gle/CexfaeJN6Mx6jQNr6" target="_blank" style={{color: "inherit", textDecoration: "none"}}> 
        <Button
            data-aos="fade-up"
            className='mt-9 hero-btn mentor-btn'
            variant='contained'
            color='primary'
            style={{ background: '#ec407a', margin: '4rem auto 4rem auto', display:'block' }}
        >
        Become a Community Partner
        </Button>
        </a>
    </div>
  );
}

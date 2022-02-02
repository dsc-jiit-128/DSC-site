import React from 'react';
import { Typography,Grid} from '@material-ui/core';
import CommunityCard from '../CommunityCard';

export default function CommunityPartners({ isDark }) {
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
          link='https://gdsc.community.dev/deogiri-institute-of-engineering-and-management-studies-aurangabad/'
        />

        <CommunityCard
          key='1'
          src={require('../../../images/sponsors/bitbox2/dav-dsc.svg')}
          link='https://gdsc.community.dev/dav-institute-of-engineering-technology-jalandhar/'
        />
        <CommunityCard
          key='2'
          src={require('../../../images/sponsors/bitbox2/dtiet-dsc.svg')}
        />
        <CommunityCard
          key='3'
          src={require('../../../images/sponsors/bitbox2/kalindi-dsc.svg')}
          link='https://bit.ly/chapterGDSCKalindi'
        />
        <CommunityCard
          key='4'
          src={require('../../../images/sponsors/bitbox2/CodeChefVIT.svg')}
          link='https://www.codechefvit.com/'
        />
        <CommunityCard
          key='5'
          src={require('../../../images/sponsors/bitbox2/CodeChefIGDTUW.jpg')}
          link='https://instagram.com/codechef_igdtuw?utm_medium=copy_link'
        />
        <CommunityCard
          key='6'
          src={require('../../../images/sponsors/bitbox2/GDSCGND.png')}
          link='https://gdscgndu.github.io/'
        />
      </Grid>
    </div>
  );
}

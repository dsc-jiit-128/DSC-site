import React from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';
import { BiCalendarX } from 'react-icons/bi';
import { FaBrain, FaHourglassStart, FaIdBadge } from 'react-icons/fa';
import { FaHourglassEnd } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { SiBitcoin } from 'react-icons/si';
import { SiKotlin } from 'react-icons/si';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiBladeBite } from 'react-icons/gi';
import { GiBoneGnawer } from 'react-icons/gi';
import { SiCodechef } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import { GiGlassCelebration } from 'react-icons/gi';
import { FaCrown } from 'react-icons/fa';
import { Typography } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import StarsIcon from '@material-ui/icons/Stars';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../bitbox.scss';

const timeAfter = (releaseDate) => {
  if (!releaseDate) return false;
  const releaseEpoch = new Date(releaseDate);
  const today = new Date();
  if (today > releaseEpoch) return true;
  return false;
};

// use relese date as mm/dd/yyyy hh:mm
const scheduleDetails = [
  {
    eventName: 'Speaker session on Web Technology',
    date: '31st January 2022 6:00PM',
    // speaker: "Some Cool Guy",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <StarsIcon />,
    // link: 'https://www.youtube.com/watch?v=fu75vu6Nnnk',
    releaseDate: '02/03/2021 18:00',
  },
  {
    eventName: 'Registration Begins',
    date: '1st February 2022',
    speaker: 'Some Cool Guy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <LanguageIcon />,
    // releaseDate: '01/02/2022 17:00',
  },
  {
    eventName: 'Speaker session on Cloud',
    date: '7th February 2022 5:00PM',
    speaker: 'Some Cool Guy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <SiKotlin />,
    // link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    // releaseDate: '07/02/2022 17:00',
  },
  {
    eventName: 'Speaker session on ML',
    date: '14 Feb 2022 5:00PM',
    speaker: "It's a secret",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <FaBrain />,
    // link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    // releaseDate: '14/02/2021 17:00',
  },
  {
    eventName: 'Speaker session on Blockchain Technology',
    date: '21st February 2022',
    speaker: "It's a secret",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <FaBrain />,
    // link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    // releaseDate: '14/02/2021 17:00',
  },
  {
    eventName: 'Registration Ends',
    date: '28th February 2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <HiOutlineLightBulb />,
    releaseDate: '26/02/2022 17:00',
  },
  {
    eventName: 'Some exciting Mini-events',
    date: '26th February - 3rd March 2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <AiOutlineCloudServer />,
    link: 'https://discord.com/invite/HqatsVyq5H',
  },
  {
    eventName: 'Ideation Period',
    date: '1st - 3rd March, 2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <FaIdBadge />,
    releaseDate: '01/03/2022 17:00',
  },
  {
    eventName: 'Hackathon Starts',
    date: 'March 4th, 2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <FaCrown />,
    link: 'http://linktr.ee/dsc128',
    releaseDate: '04/03/2022 17:00',
  },
  {
    eventName: 'Mid-evaluation Round/Elimination Round',
    date: 'March 5th, 2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <BiCalendarX />,
    releaseDate: '05/03/2022 17:00',
  },
  {
    eventName: 'Hackathon Ends',
    date: 'March 6th 2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <GrTechnology />,
    releaseDate: '06/03/2022 17:00',
  },
  {
    eventName: 'Results',
    date: 'March 8th 2022 6:00PM',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ',
    icon: <FaHourglassStart />,

    releaseDate: '08/03/2022 17:00',
  },
];

const googleColors = [
  '#4285F4',
  '#EA4335',
  '#F8BC06',
  '#4285F4',
  '#35A853',
  '#EA4335',
];

export default function Schedule({ isDark }) {
  return (
    <div style={{ position: 'relative' }}>
      <Typography
        data-aos='flip-up'
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'>
        Schedule
      </Typography>

      <VerticalTimeline className={isDark ? 'dark-timeline' : ''}>
        {/* GENERATING EVENTS FROM ARRAY */}
        {scheduleDetails.map((el, idx) => (
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: googleColors[idx % 6], color: '#fff' }}
            contentArrowStyle={{
              borderRight: `7px solid ${googleColors[idx % 6]}`,
            }}
            date={`${el.date}`}
            iconStyle={{ background: googleColors[idx % 6], color: '#fff' }}
            icon={el.icon}>
            <h3 className='vertical-timeline-element-title'>{el.eventName}</h3>
            {/* <h4 className="vertical-timeline-element-subtitle" style={{textAlign:'right'}}>{el.speaker}</h4> */}
            {/* <p>
            {el.desc}
          </p> */}
            {el.link && (
              <Button
                variant='outlined'
                href={el.link}
                style={{
                  borderColor: '#fff',
                  color: '#fff',
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '2rem',
                }}>
                {timeAfter(el.releaseDate) ? 'Watch here' : 'Set Reminder'}
              </Button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

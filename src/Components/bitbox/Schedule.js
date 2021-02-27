import React from 'react'
import Button from '@material-ui/core/Button';
import {AiOutlineCloudServer} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import {BiCalendarX} from 'react-icons/bi'
import {FaHourglassStart} from 'react-icons/fa'
import {FaHourglassEnd} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {SiFlutter} from 'react-icons/si'
import {SiTensorflow} from 'react-icons/si'
import {SiBitcoin} from 'react-icons/si'
import {SiKotlin} from 'react-icons/si'
import {HiOutlineLightBulb} from 'react-icons/hi';
import {GiBladeBite} from 'react-icons/gi'
import {GiBoneGnawer} from 'react-icons/gi'
import {GiGlassCelebration} from 'react-icons/gi'
import {IoCloudDone} from 'react-icons/io5'
import { Typography } from '@material-ui/core'
import WorkIcon from "@material-ui/icons/Work";
import LanguageIcon from '@material-ui/icons/Language';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AndroidIcon from '@material-ui/icons/Android';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './bitbox.scss';

const timeAfter = (releaseDate) => {
  if(!releaseDate) return false;
  const releaseEpoch = new Date(releaseDate);
  const today = new Date();
  if(today>releaseEpoch) return true;
  return false;
}


// use relese date as mm/dd/yyyy hh:mm
const scheduleDetails = 
[
  {
    eventName: "Info session & Registration Begins",
    date: "3 Feb 2021 6:00PM",
    // speaker: "Some Cool Guy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <StarsIcon/>,
    link: 'https://www.youtube.com/watch?v=rqVBtMAfLQ0',
    releaseDate: '02/03/2021 18:00'
  },
  {
    eventName: "Webinar: Web Pathways",
    date: "7 Feb 2021 5:00PM",
    speaker: "Some Cool Guy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <LanguageIcon/>,
    link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    releaseDate: '02/07/2021 17:00'
  },
  {
    eventName: "Webinar: Kotlin",
    date: "20 Feb 2021 5:00PM",
    speaker: "Some Cool Guy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <SiKotlin/>,
    link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    releaseDate: '02/20/2021 17:00'
  },
  {
    eventName: "Webinar: Blockchain",
    date: "1st March 2021 5:00PM",
    speaker: "Some Cool Guy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <SiBitcoin/>,
    link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    releaseDate: '03/01/2021 17:00'
  },
  {
    eventName: "Idea submission opens",
    date: "1st March 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <HiOutlineLightBulb/>
  },
  {
    eventName: "Webinar: Tensorflow",
    date: "6 March 2021 5:00PM",
    speaker: "Some Cool Guy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <SiTensorflow/>,
    link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    releaseDate: '03/06/2021 17:00'
  },
  {
    eventName: "Webinar: Cloud Technologies",
    date: "13 March 2021 5:00PM",
    speaker: "Some Cool Guy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <AiOutlineCloudServer/>,
    link: 'https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg',
    releaseDate: '03/13/2021 17:00'
  },
  {
    eventName: "Registration Ends",
    date: "14 March 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <BiCalendarX/>,
  },
  {
    eventName: "Idea Prsentation Deadline",
    date: "14 March 2021 6:00PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <MdOndemandVideo/>,
  },
  {
    eventName: "Mini Events On Discord",
    date: "14 - 26 March 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <FaDiscord/>,
  },
  {
    eventName: "Hack Begins",
    date: "26 March 2021 6:00PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <FaHourglassStart/>,
  },
  {
    eventName: "1st Evaluation Begins | Elimination Round ",
    date: "27 March 2021 3:00PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <GiBladeBite/>,
  },
  {
    eventName: "1st Evaluation Results | Eliminations",
    date: "27 March 2021 8:00PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <GiBoneGnawer/>,
  },
  {
    eventName: "Hack Ends | Final Evaluations",
    date: "28 March 2021 6:00PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <FaHourglassEnd/>,
  },
  {
    eventName: "Winners Declared",
    date: "29 March 2021 5:00PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in pulvinar leo. Nam vel mattis sem, eget condimentum eros. Sed condimentum molestie semper. ",
    icon: <GiGlassCelebration/>,
  }
]

const googleColors = ['#4285F4', '#EA4335', '#F8BC06', '#4285F4', '#35A853', '#EA4335']

export default function Schedule({isDark}) {
    return (
        <div style={{position:'relative'}}>
           <Typography
          data-aos="flip-up"
          variant="h3"
          component="p"
          className="dsc-font"
          align="center"
        >
          Schedule
        </Typography>

        <VerticalTimeline className={isDark?"dark-timeline":""}>

        {/* GENERATING EVENTS FROM ARRAY */}
        {scheduleDetails.map((el,idx) => (        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: googleColors[idx%6], color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid ${googleColors[idx%6]}` }}
          date={`${el.date}`}
          iconStyle={{ background: googleColors[idx%6], color: '#fff' }}
          icon={el.icon}
        >
          <h3 className="vertical-timeline-element-title">{el.eventName}</h3>
          {/* <h4 className="vertical-timeline-element-subtitle" style={{textAlign:'right'}}>{el.speaker}</h4> */}
          {/* <p>
            {el.desc}
          </p> */}
        {(el.link)&&
        (<Button variant="outlined" href={el.link} style={{borderColor:'#fff', color:'#fff', display: 'block', textAlign:'center', marginTop: '2rem'}}>
        {timeAfter(el.releaseDate)?'Watch here':'Set Reminder'}
        </Button>)
        }
        </VerticalTimelineElement>))}
        </VerticalTimeline>
        </div>
    )
}

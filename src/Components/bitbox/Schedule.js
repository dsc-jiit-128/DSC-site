import React from 'react'
import { Typography } from '@material-ui/core'
import plan from '../../images/bitbox/plan.mp4'
export default function Schedule() {
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
        <div className='temp-video'>
            <video className='planning' autoPlay muted>
                <source src={plan} type="video/mp4"></source>
            </video>
        </div>
        <Typography
          data-aos="flip-up"
          variant="h4"
          component="p"
          className="dsc-font"
          align="center"
          style={{color:'#818885'}}
        >
          Planning an awesome event for you...	&#128521;
        </Typography>
        </div>
    )
}

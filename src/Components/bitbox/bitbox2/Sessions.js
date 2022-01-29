import React from 'react';
import '../bitbox2.scss';
import youtubeIcon from '../../../images/YouTube.svg';

export default function Sessions({ isDark }) {
  const sessions = [
    {
      title: 'Webinar on Web Technologies',
      Speaker: 'Ayush Singh',
      Date: '31st January, 4 P.M',
      link: 'Link',
    },
  ];
  return (
    <div style={{ width: '80%' }}>
      {sessions.map((data) => (
        <div
          className='sessions'
          item
          data-aos='zoom-in'
          data-aos-duration='500'>
          <div style={{ textAlign: 'right' }}>
            <div>
              <b>{data.title}</b>
              <i> By {data.Speaker}</i>
            </div>
            <div>- UI Engineer at Flipkart</div>
          </div>
          <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            {data.Date}
          </div>
          <div>
            <a href='https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg'>
              <img
                src={youtubeIcon}
                alt='youtube-icon'
                className='social-icon'
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

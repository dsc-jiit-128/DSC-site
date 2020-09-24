import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

export default function Sponsor() {
  let history = useHistory();

  return (
    <div className='mb-3'>
      <Typography
      data-aos="flip-down"
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'
      >
        Sponsors
      </Typography>
      <Container fixed>
        <a href='mailto:dscjiit128@gmail.com' style={{ textDecoration: 'none' }}>
          <Button
      data-aos="zoom-out"

            className='mt-9'
            variant='contained'
            color='primary'
            style={{ background: '#35A853', margin: '2rem auto', display:'block' }}
          >
            Wanna Sponsor Us?
          </Button>
        </a>
      </Container>
    </div>
  );
}

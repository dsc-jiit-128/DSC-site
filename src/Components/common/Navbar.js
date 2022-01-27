import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import dscIcon from '../../images/logo.svg';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Button, Drawer, IconButton, Divider, List } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { Typography } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import InfoIcon from '@material-ui/icons/Info';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import workFromHome from '../../images/workfromhome.gif';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const handleSwitch = (event) => {
    if (event.target.checked) localStorage.setItem('isDark', true);
    else localStorage.setItem('isDark', false);
    props.turnDark(event.target.checked);
  };


  return (
   
    <div>
      <AppBar className='navbar' position='static' alignitems='baseline'>
        <Container>
          <Grid justify='space-between' container alignitems='center'>
            <Grid item>
              <Box
                display='flex'
                onClick={() => {
                  window.location = '#/';
                }}>
                <img className='dsc-logo' src={dscIcon} alt='logo'></img>
                <p className='dsc-logo-text'>
                  GDSC <span className='dsc-college-name'>JIIT128</span>
                </p>
              </Box>
            </Grid>
            
            

            <div className='darkMode-switch'>
              <Typography
                variant='h6'
                component='p'
                style={{
                  color: `${props.isDark ? '#f4eabe' : '#111'}`,
                  position: 'relative',
                  top: '5px',
                }}>
                {/* Dark Mode */}
                <WbSunnyIcon />
              </Typography>
              <Switch
                checked={props.isDark}
                onChange={handleSwitch}
                color='secondary'
                thumbComponent={NightsStayIcon}
                name='checkedB'
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Typography
                variant='h6'
                component='p'
                style={{
                  color: `${props.isDark ? '#4285F4' : '#111'}`,
                  position: 'relative',
                  top: '5px',
                }}>
                {/* Dark Mode */}
                <NightsStayIcon />
              </Typography>
              <Grid item>
                <Button
                  aria-controls='fade-menu'
                  aria-haspopup='true'
                  onClick={handleDrawerOpen}
                  className='drawer-btn'>
                  <MenuIcon />
                </Button>
              </Grid>
            </div>
          </Grid>
        </Container>
      </AppBar>
       <div>
       <div style={{ marginLeft: '0%', marginTop: '72px', width: '100%' , shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.12,
            shadowRadius: 60, }}>
        <Box color="black" bgcolor="lightgrey"  height={20}   p={1}>
       <p style={{position:'absolute', top:'65px', left:'500px'}}>Bit Box 2.0 is here, tune in on 28th feb at 5:00 P.M  click here </p> 
          <button  cssClass='e-link' onClick={ () => {  handleDrawerClose();
              window.location = 'https://www.youtube.com/watch?v=wR0O8FMLm7c';} } style={{ borderRadius:'10%' , shadowColor: "black",shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.12,
            shadowRadius: 60, backgroundColor:'black', color: 'white', fontSize:'16px' ,border:'none', position:'absolute', top:'75px', left:'1000px' , borderColor:'indianred', width:"100px" , height:"30px",  }}><b style={{ position:'absolute', top:'5px', left:'20px'}} >Click me</b></button>
    </Box>
    </div>
       </div>
      {/* // menu below */}
      <Drawer variant='persistent' anchor='right' open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon className='drawer-btn' />
            ) : (
              <ChevronRightIcon className='drawer-btn' />
            )}
          </IconButton>
        </div>
        <Divider />
        <img src={workFromHome} alt='workfromhome' className='slider-img' />
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              handleDrawerClose();
              window.location = '#/';
            }}>
            <ListItemIcon>
              <HomeIcon className='drawer-btn' />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          
          
          <ListItem
            button
            onClick={() => {
              handleDrawerClose();
              window.location = '#/highlights';
            }}>
            <ListItemIcon>
              <EventIcon className='drawer-btn' />
            </ListItemIcon>
            <ListItemText primary={'Highlights'} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleDrawerClose();
              window.location = '#/bitbox';
            }}>
            <ListItemIcon>
              <EmojiEventsIcon className='drawer-btn' />
            </ListItemIcon>
            <ListItemText primary={'BitBox 2.0'} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleDrawerClose();
              window.location = '#/team';
            }}>
            <ListItemIcon>
              <GroupIcon className='drawer-btn' />
            </ListItemIcon>
            <ListItemText primary={'Team'} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleDrawerClose();
              window.location = '#/events';
            }}>
            <ListItemIcon>
              <EventAvailableIcon className='drawer-btn' />
            </ListItemIcon>
            <ListItemText primary={'Events'} />
          </ListItem>
        </List>
      </Drawer>
   
    </div>
  );
};

export default Navbar;

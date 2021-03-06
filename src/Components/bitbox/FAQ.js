import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
        
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: '#000',
  },
}));

export default function FAQ() {
  const colors = ['#4285F4','#EA4335','#F8BC06', '#35A853']
  const faqArr = [
    {
      Q: 'What is a hackathon?',
      ans:
        'A hackathon is social coding event where programmers, designers and developers collaborate to solve a problem and compete for cash prizes. Hackathons are a super-condensed learning experience and the time constraint helps you to break your shell to build something from the ground up with teamwork and harmony. BIT BOX aims to bring together the coding community under one roof to put their minds and skills towards a shared goal and to create new and innovative solutions',
    },
    {
      Q: 'Why would someone participate in a hackathon?',
      ans:
        'People participate in hackathons for lots of reasons: the challenge, the creative outlet, the community collaboration, the networking, and swags. The plethora of problem statements act as a juggernaut for participants and keeps them on the edge of their seats.',
    },
    {
      Q: 'Who is this event for?',
      ans:
        'Students with a passion to make something innovative with teamwork and who can solve problems in an efficient ingenious way.',
    },
    {
      Q: 'Is the event open to all ages?',
      ans:
      'Yes, however you need to be enrolled in an undergraduate program.',
    },
    {
      Q: 'Who can participate? Are there any prerequisites or required skills?',
      ans: 'We welcome and encourage anyone with ideas, programming skills, and enthusiasm to participate in this event!',
    },
    {
        Q: 'Do I need a team?',
        ans: 'Yes, you do need a team to participate in this event. A maximum of 4 team members and a minimum of 2 members is allowed.'
    },
    {
        Q: 'Is there anything that i need to prep?.',
        ans: 'Yes, you need to have an idea for your project. You can begin your project as soon as you register'
    },
   {Q: 'How much does it cost?',
    ans: 'Free! It’s absolutely free of cost'},
    
    {Q:'Does one have to be online and available for the entire duration of the Hackathon?',
    ans:'Essentially from the 14th of March until the Hackathon ends i.e., 28th of March 6 o\'clock.'},
    
    {Q:'Since there is no specific technology mentioned, are there any restrictions on using number of pre-built libraries?',
    ans: 'No restrictions are there, do check out all the available resources present in the FAQ doc which can be found on https://linktr.ee/dsc128. FAQ doc of the solution challenge can be used as a resource.'},

    {Q:'Will I get participation certificate?',
    ans:'Yes, all participants will get a participation certificate.'},

    {Q:'Can I team up with students of different colleges',
    ans:'Yes, you can team with any student!'},
    {
      Q: 'Have more questions?',
      ans: 'Head over here: https://guide.devfolio.co/hackers/faqs-for-hackers'
    }
  ];
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(null);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Typography
      data-aos="flip-down"
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'
      >
        FAQs
      </Typography>
      <Container className='mt-3 mb-3' fixed>
        <Grid container spacing={3}>
          {faqArr.map((faq, idx) => 
            {   
                const color = colors[Math.floor(Math.random() * colors.length)];
                // const color = colors[idx%4];
                return (<Grid item xs={12} md={6} data-aos="zoom-in-down" key={idx}>
              <Accordion
                expanded={expanded === `panel${idx+1}`}
                onChange={handleChange(`panel${idx+1}`)}
              >
                <AccordionSummary
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                  style={{borderLeft:`5px solid ${color}`, color:`${expanded=== `panel${idx+1}`?color:(localStorage.getItem('isDark')==="true"?'#fff':'#000')}`}}
                  
                >
                  <Typography>{faq.Q}</Typography>
                </AccordionSummary>
                <AccordionDetails >
                  <Typography >
                    {faq.ans}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>)}
          )}
        </Grid>
      </Container>
    </div>
  );
}

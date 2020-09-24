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
      Q: 'Whats a hackathon?',
      ans:
        'A hackathon is social coding event where programmers, designers and developers collaborate to solve a problem and compete for cash prizes. It’s one part party, one part work-your-butt-off overnight battle against the clock and the competition.',
    },
    {
      Q: 'Why should I participate?',
      ans:
        'People participate in hackathons for lots of reason: the challenge, the creative outlet, the community collaboration, the networking, the swag…',
    },
    {
      Q: 'Who is this event for?',
      ans:
        'This event is open to both participants and spectators from the community who want to cheer them on and see what the hackathon is all about.',
    },
    {
      Q: 'Who can participate? Are there any prerequisites or required skills?',
      ans:
        'Anyone is welcome to participate in this event. While experience coding and programming is a huge plus, teams will also need people with strong presentation skills and brilliant ideas.',
    },
    {
      Q: 'Will there be training?',
      ans: 'There is no pre event training.',
    },
    {
        Q: 'Is there anything I need to prepare?',
        ans: 'Other than finding fellow brilliant minds with complimentary skills to team up with, there is nothing that you need to prepare in advance.'
    },
    {
        Q: 'How much does it costs?',
        ans: 'Nothing, Zero, Its Free!!!'
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
                return (<Grid item xs={12} md={6} data-aos="zoom-in-down">
              <Accordion
                expanded={expanded === `panel${idx+1}`}
                onChange={handleChange(`panel${idx+1}`)}
              >
                <AccordionSummary
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                  style={{borderLeft:`5px solid ${color}`, color:`${expanded=== `panel${idx+1}`?color:'#000'}`}}
                  
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

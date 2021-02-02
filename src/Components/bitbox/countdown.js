import React from 'react';
import moment from 'moment';
import CountdownTimer from './countdownTimer';
class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateValue: '',
      timeValue: '',
      ampmValue: 'am',
      countdown: {
        days: '',
        hours: '',
        mins: '',
        secs: ''
      },
      isCountdownSet: true,
      infoMessage: '',
      settingsFormError: false,
      errorMessage: ''
    };
    this.timer = null;
    this.countDownDate = {
      dateValue: this.state.dateValue,
      timeValue: this.state.timeValue,
      ampmValue: this.state.ampmValue,
      unixEndDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  renderCountdownDate(countDownDate) {
    var a= countDownDate ? localStorage.setItem('countDownDate', JSON.stringify(countDownDate)) : null;
    return JSON.parse(localStorage.getItem('countDownDate')) || this.countDownDate;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleStart(dateValue, timeValue, ampmValue) {
    const unixEndDate = Number(moment(`${dateValue} ${timeValue} ${ampmValue}`, 'MM-DD-YYYY hh:mm A').format('X'));
    this.startCountdown(this.renderCountdownDate({
    dateValue,
    timeValue,
    ampmValue,
    unixEndDate
    }));
  }

  startCountdown(endDate) {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.playTimer(endDate.unixEndDate), 1000);
    
  }

  playTimer(unixEndDate) {
    const distance = unixEndDate - moment().format('X');

    if (distance > 0) {
      this.setState({
        countdown: {
          days: parseInt(distance / (60 * 60 * 24), 10),
          hours: parseInt(distance % (60 * 60 * 24) / (60 * 60), 10),
          mins: parseInt(distance % (60 * 60) / (60), 10),
          secs: parseInt(distance % 60, 10)
        },
        isCountdownSet: true,
      });
    }
    else {
      clearInterval(this.timer);
      this.timer = null;
      this.renderCountdownDate(this.countDownDate);
      this.setState({
        isCountdownSet: false,
      });
      console.log("Date is > todays date....")
    }
  }

//   clearCountdown() {

//     if (this.renderCountdownDate().unixEndDate !== '') {

//       if (confirm('Are you sure you want to clear your currently running countdown?')) {
//         clearInterval(this.timer);
//         this.timer = null;
//         this.setState({
//           isCountdownSet: false,
//           infoMessage: 'Countdown cleared. Click the Settings button to start a new countdown.',
//         });
//         this.renderCountdownDate(this.countDownDate);
//       }
//     }
//     else {
//       alert('No countdown has been set. Please click the Settings button to start a new countdown.');
//     }
//   }

  componentDidMount() {
    this.handleStart('03-26-2021','6:00','pm'); //MM-DD-YYYY, HH:MM, 'am/pm'
    this.startCountdown(this.renderCountdownDate());
  }

  render() {
    return (
      <div>
          {this.state.isCountdownSet ? <CountdownTimer countdown={this.state.countdown} unixEndDate={this.renderCountdownDate().unixEndDate} dark={this.props.isDark} /> : <div className="align-t-c">Event Started</div>}
      </div>
    );
  }
}

export default Countdown;

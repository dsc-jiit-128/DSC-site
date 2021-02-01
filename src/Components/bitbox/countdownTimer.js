import React from 'react';
import moment from 'moment';

const CountdownTimer = ({ countdown, unixEndDate, dark }) => {
  return (
    <div className={dark?"countdown-d align-t-c":"countdown align-t-c"}>
      <div className="card">
        <div className="countdown-value">{countdown.days}</div>
        <div className="countdown-unit">Days</div>
      </div>
      <div className="card">
        <div className="countdown-value">{countdown.hours}</div>
        <div className="countdown-unit">Hours</div>
      </div>
      <div className="card">
        <div className="countdown-value">{countdown.mins}</div>
        <div className="countdown-unit">Mins</div>
      </div>
      <div className="card secs">
        <div className="countdown-value">{countdown.secs}</div>
        <div className="countdown-unit">Secs</div>
      </div>
      <p className="align-t-c">Event Starts At {moment.unix(unixEndDate).format('dddd, MMMM Do, YYYY | h:mm A')}</p>
    </div>
  );
}

export default CountdownTimer;

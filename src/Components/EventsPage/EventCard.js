import './EventCard.scss';
import React from 'react';

const EventCard = (props)=>{
    return (
        <a className="eventCard" href={props.link} target="_blank">
            <img src={props.imgsrc} alt={props.alt}/>
            <div className="date">{props.date}</div>
            <div className="type">{props.type}</div>
            <div className="title">{props.title}</div>
        </a>
    );
}

export default EventCard;
import React, {useState, useEffect} from 'react';
import EventCard from './EventCard';
import './Events.scss';
const axios = require('axios');

const EventsPage = (props)=>{
    const [pastData, setpastData] = useState();
    const [upcomingData, setupcomingData] = useState();
    useEffect(()=>{
        axios.get("https://dsc-data.herokuapp.com/data").then((res)=>{
            setpastData(res.data.past);
            setupcomingData(res.data.upcoming);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);
    return (
        <div id="events">
            <div className="eventsection">
                <h1>Upcoming Events</h1>
                <div className="cards">
                    {
                        upcomingData ? upcomingData.map((event)=>{
                            return <EventCard 
                                link={event.link}
                                date={event.date}
                                type={event.type}
                                title={event.title}
                                imgsrc={event.image}
                            />
                        }) : null
                    }
                </div>
            </div>
            <div className="eventsection">
                <h1>Past Events</h1>
                <div className="cards">
                    {
                        pastData ? pastData.map((event)=>{
                            return <EventCard 
                                link={event.link}
                                date={event.date}
                                type={event.type}
                                title={event.title}
                                imgsrc={event.image}
                            />
                        }) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default EventsPage;
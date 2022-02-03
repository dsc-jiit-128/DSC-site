import React from "react";

const EventCard = (imgsrc) => {
  return (
    <a className="eventCard" target="_blank">
      <img src={require(`../../images/previousEvents/${imgsrc}`)} />
    </a>
  );
};

export default EventCard;

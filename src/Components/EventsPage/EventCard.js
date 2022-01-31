import React from "react";

const EventCard = (imgsrc) => {
//   console.log(`${imgsrc}`);
  return (
    <a className="eventCard" target="_blank">
      <img src={require(`../../images/previousEvents/${imgsrc}`)} />
    </a>
  );
};

export default EventCard;

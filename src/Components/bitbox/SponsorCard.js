import React from 'react';

const SponsorCard = (props)=>{
    return (
        <div className="sponsorCard">
            <img src={props.src} alt="Img not found"/>
        </div>
    );
}

export default SponsorCard;
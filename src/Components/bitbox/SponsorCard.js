import React from 'react';

const SponsorCard = (props)=>{
    return (
        <div className="sponsorCard">
            <a href={props.link} target="_blank" rel="noopener noreferer" className="sponsorCard">
                <img src={props.src} alt="sponsors"/>
            </a>
        </div>
    );
}

export default SponsorCard;
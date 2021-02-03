import React from 'react';

const CommunityCard = (props)=>{
    return (
        <div className="communityCard">
            <a href={props.link} target="_blank" rel="noopener noreferer" className="communityCard" >
                <img src={props.src} alt="community"/>
            </a>
        </div>
    );
}

export default CommunityCard;
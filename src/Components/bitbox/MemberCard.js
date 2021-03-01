import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Member = ({ img, name, position, social, webinar, dark }) => {
    // console.log(`../../images/member_pic/${img}`);
    return (
        <div className={dark?"member-card-s member-card-s-d":"member-card-s"} >
            <img src={require(`../../images/speakers/${img}`)} alt="profile" />
            <h3 className="dsc-font">{name}</h3>
            <p className="dsc-font">{position}</p>
            <h3 className="webinar">{webinar}</h3>
            <div className="handles">
                <a href={social.linkedin} rel="noopener noreferrer" target="_blank">
                    <LinkedInIcon className="color-blue sizing" />
                </a>
            </div>
        </div>
    );
};

export default Member;

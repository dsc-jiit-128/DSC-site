import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Member = ({ img, name, position, social, webinar, dark }) => {
    // console.log(`../../images/member_pic/${img}`);
    return (
        <div className="member-card-s" data-aos="zoom-out">
            <img src={require(`../../images/member_pic/${img}`)} alt="profile" />
            <h3 className="dsc-font">{name}</h3>
            <p className="dsc-font">{position}</p>
            <h3 className="webinar">{webinar}</h3>
            <div className="handles">
                <a href={social.facebook} rel="noopener noreferrer" target="_blank">
                    <FacebookIcon className="color-primary sizing" />
                </a>
                <a href={social.insta} rel="noopener noreferrer" target="_blank">
                    <InstagramIcon className="color-pink sizing" />
                </a>
                <a href={social.linkedin} rel="noopener noreferrer" target="_blank">
                    <LinkedInIcon className="color-blue sizing" />
                </a>
            </div>
        </div>
    );
};

export default Member;

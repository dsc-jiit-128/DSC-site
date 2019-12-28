import React from "react";

const MemberCard = ({ img, name, position }) => {
  return (
    <div className="member-card">
      <img src={img} alt="profile" />
      <h3 className="dsc-font">{name}</h3>
      <p className="dsc-font">{position}</p>
    </div>
  );
};

export default MemberCard;

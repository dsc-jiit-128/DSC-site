import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Member = ({ img, social, dark }) => {
  // console.log(`../../images/member_pic/${img}`);
  return (
    <div>
      <a href={social}>
        <img
          style={{
            height: "500px",
          }}
          src={require(`../../../images/judges/${img}`)}
          alt="profile"
        />
      </a>
    </div>
  );
};

export default Member;

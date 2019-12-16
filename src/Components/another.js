import React from "react";
import { withRouter } from "react-router-dom";

const another = () => {
  return (
    <div>
      <a href="/">team</a>
    </div>
  );
};

export default withRouter(another);

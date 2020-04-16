import React from "react";
import './UserOutput.css'

const userOutput = props => {
  return (
    <div>
      <p className="UserOutput"> Paragraph 1 created by {props.userName}</p>
      <p className="UserOutput"> Paragraph 2 created by {props.userName}</p>
    </div>
  );
};

export default userOutput;

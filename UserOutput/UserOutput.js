import React from "react";

const userOutput = props => {
  return (
    <div>
      <p> Paragraph 1 created by {props.userName}</p>
      <p> Paragraph 2 created by {props.userName}</p>
    </div>
  );
};

export default userOutput;

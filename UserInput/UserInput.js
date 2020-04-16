import React from "react";

const userInput = props => {
  const style = {
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };
  return (
    <div>
      User Name:
      <input style={style} type="text" onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default userInput;

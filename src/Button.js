import React from "react";

const Button = props => {
  return (
    <button onClick={props.generateSen} style={buttonStyle}>
      Re-generate!
    </button>
  );
};

const buttonStyle = {
  marginLeft: "10px",
  fontSize: "16px",
  border: "1px solid black",
  padding: "0 5px",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Button;

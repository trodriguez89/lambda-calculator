import React from "react";

const OperatorButton = (props) => {
  const operatorButtonStyle = {
    width: "100px",
    height: "100px",
    fontSize: "3.0rem",
    borderRadius: "50px",
    backgroundColor: "#1E90FF",
  }
  return (
    <>
    <button className = "buttons operator-color" style ={operatorButtonStyle}>
      {props.operatorInfo.char}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
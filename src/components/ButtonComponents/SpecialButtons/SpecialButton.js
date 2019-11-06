import React from "react";

const SpecialButton = (props) => {
  const specialButtonStyle = {
    width: "100px",
    height: "100px",
    fontSize: "3.0rem",
    borderRadius: "50px",
    backgroundColor: "#4169E1",
  }
  return (
    <>
    <button className = "buttons special-color" style ={specialButtonStyle}>
      {props.array}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;
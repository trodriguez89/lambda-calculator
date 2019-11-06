import React from "react";
import {numbers} from "../../../data";
import { AST_PropAccess } from "terser";

const NumberButton = ({numbersArray}) => {
let numberStyle;

if (numbersArray == 0) {
   numberStyle = { 
    width: "220px",
    height: "100px",
    fontSize: "3.0rem",
    borderRadius: "50px",
    backgroundColor: "#4682B4",
  }
  } else {
    numberStyle = {
      width: "100px",
      height: "100px",
      fontSize: "3.0rem",
      borderRadius: "50px",
      backgroundColor: "#4682B4",
    }
  }

  return (
    <>
    <button className = "buttons numbers-color" style ={numberStyle}>
      {numbersArray}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
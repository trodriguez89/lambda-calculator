import React from "react";
import {numbers} from "../../../data";
import { AST_PropAccess } from "terser";

const NumberButton = (props) => {

  return (
    <>
    <button className = "buttons numbers-color">
      {props.numbersArray}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
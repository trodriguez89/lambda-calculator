import React from "react";
import {numbers} from "../../../data";

const NumberButton = (props) => {
  return (
    <>
    <button>
      {props.numbersArray}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
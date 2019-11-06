import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [specialArray] = useState(specials);
  const specialStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "490px",
    height: "110px",
    paddingTop: "10px"
  }
  // STEP 2 - add the imported data to state

  return (
    <div style ={specialStyle}>
      {specialArray.map((button, index) => (
        <SpecialButton key={index} array={button}/>
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
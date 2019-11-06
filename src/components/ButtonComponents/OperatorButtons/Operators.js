import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [operatorArray] = useState(operators);
  const operatorStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginBottom: "13px",
    height: "100%",
  }
  // STEP 2 - add the imported data to state
  return (
    <div style ={operatorStyle}>
      {operatorArray.map((button, index) =>(
        <OperatorButton key ={index} operatorInfo ={button}/>
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
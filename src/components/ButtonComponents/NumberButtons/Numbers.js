import React, {useState} from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  const [numbersArray, setNumbers] = useState(numbers);
  const numberStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "490px",
    justifyContent: "space-around",
    height: "450px",
  }
  // STEP 2 - add the imported data to state
  return (
    <div style={numberStyle}>
      {numbersArray.map((button, index) =>(
        <NumberButton key ={index} numbersArray ={button}/>
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
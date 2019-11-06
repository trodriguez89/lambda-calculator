import React from "react";

const Display = (props) => {
  return (
  <div className="display">
    <span>{props.output}</span>
  {/* Display any props data here */}
  </div>
  )
};

export default Display;

import React from "react";
import "./Instruction.scss";

const Instruction = ({ index, instruction }) => {
  return (
    <div className="instruction">
      <div className="instruction__index">{`${index}.`}</div>
      <div className="instruction__p">{instruction}</div>
    </div>
  );
};

export default Instruction;

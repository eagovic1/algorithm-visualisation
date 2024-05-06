import React, { useEffect, useState } from "react";
import ArrayElement from "../ArrayElement/ArrayElement";
import StepControl from "../StepControl/StepControl";
import "./SortingArray.css";

enum InstructionType {
  TAG = "tag",
  SWAP = "swap",
  COMPARE = "compare",
  ASSIGN = "assign",
}

interface Instruction {
  type: InstructionType;
  clear: boolean;
  operands: number[];
  description: string;
}

interface SortingArrayProps {
  array: number[];
  instructions: Instruction[];
}

const SortingArray = (props: SortingArrayProps) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [taggedElements, setTaggedElements] = useState<number[]>([]);

  // console.log(props);
  let instructions = props.instructions;
  let array = props.array;

  useEffect(() => {
    console.log("Current step: ", currentStep);
  }, [currentStep]);

  return (
    <div id="rootSortingArray">
      <div id="array">
        {array.map((element, index) => {
          return (
            <>
              <ArrayElement key={index} value={element} index={index}></ArrayElement>
            </>
          );
        })}
      </div>
      <div>
        <h3>STEP: {currentStep}/{instructions.length}</h3>
      </div>
      <StepControl
        currentStep={currentStep}
        instructionsLength={instructions.length}
        setCurrentStep={setCurrentStep}
      ></StepControl>
    </div>
  );
};

export default SortingArray;

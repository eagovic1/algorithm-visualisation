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
  const [currentStep, setCurrentStep] = useState(1);
  const [taggedElements, setTaggedElements] = useState<number[]>([]);
  const [array, setArray] = useState<number[]>(
    JSON.parse(JSON.stringify(props.array))
  );
  /*
    const [taggedElements, setTaggedElements] = useState<object>({});
    taggedElements["0"] = "primary" // tag
    taggedElements = {} // clear
  */
  // console.log(props);
  let startingArray = JSON.parse(JSON.stringify(props.array));
  let instructions = props.instructions;

  useEffect(() => {
    console.log(startingArray);
    console.log("Current step: ", currentStep);

    if (currentStep == 1) {
      // reset the array
      setArray(JSON.parse(JSON.stringify(props.array)));
      setTaggedElements([]);
    }

    // clear
    if (instructions[currentStep - 1].clear) setTaggedElements([]);

    if (instructions[currentStep - 1].type === InstructionType.TAG) {
      // tag element
      setTaggedElements((taggedElements) => [
        ...taggedElements,
        ...instructions[currentStep - 1].operands,
      ]);
    }

    if (instructions[currentStep - 1].type === InstructionType.COMPARE) {
      // tag elements you are comparing
      setTaggedElements((taggedElements) => [
        ...taggedElements,
        ...instructions[currentStep - 1].operands,
      ]);
    }

    if (instructions[currentStep - 1].type === InstructionType.SWAP) {
      // tag elements you are swapping
      setTaggedElements((taggedElements) => [
        ...taggedElements,
        ...instructions[currentStep - 1].operands,
      ]);

      // swap the elements in the array
      setArray((prevArray) => {
        const newArray = [...prevArray];
        const [index1, index2] = instructions[currentStep - 1].operands;
        [newArray[index1], newArray[index2]] = [
          newArray[index2],
          newArray[index1],
        ];
        return newArray;
      });
    }
  }, [currentStep]);

  return (
    <div id="rootSortingArray">
      <div>
        <h3 id="description">{instructions[currentStep - 1]["description"]}</h3>
      </div>
      <div id="array">
        {array.map((element: number, index: number) => {
          return (
            <>
              <ArrayElement
                tag={taggedElements.includes(index) ? "tagged" : undefined}
                key={index}
                value={element}
                index={index}
              ></ArrayElement>
            </>
          );
        })}
      </div>
      <div>
        <h3 id="steps">
          STEP: {currentStep}/{instructions.length}
        </h3>
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

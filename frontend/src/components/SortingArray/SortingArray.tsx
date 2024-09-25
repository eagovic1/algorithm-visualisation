import { useEffect, useState } from "react";
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
  pivot: boolean;
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
  const [array, setArray] = useState<number[]>([...props.array]);
  const [pivotElement, setPivotElement] = useState<number>(0);

  let instructions = props.instructions;
  let maxElement = Math.max(...array);

  useEffect(() => {
    if (currentStep === 1) {
      setArray([...props.array]);
      setTaggedElements([]);
    }

    if (instructions[currentStep - 1].clear) {
      setTaggedElements([]);
    }

    const currentInstruction = instructions[currentStep - 1];

    if (currentInstruction.type === InstructionType.TAG) {
      setTaggedElements((taggedElements) => [
        ...taggedElements,
        ...currentInstruction.operands,
      ]);
      /*
      if (currentInstruction.pivot) {
        setPivotElement(currentInstruction.operands[0]);
      }
        */
    }

    if (currentInstruction.type === InstructionType.COMPARE) {
      setTaggedElements((taggedElements) => [
        ...taggedElements,
        ...currentInstruction.operands,
      ]);
    }

    if (currentInstruction.type === InstructionType.SWAP) {
      const [index1, index2] = currentInstruction.operands;

      setArray((prevArray) => {
        const newArray = [...prevArray];
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
            <ArrayElement
              tag={taggedElements.includes(index) ? "tagged" : undefined}
              pivot={pivotElement === element}
              key={index}
              value={element}
              maxElement={maxElement}
            />
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
      />
    </div>
  );
};

export default SortingArray;

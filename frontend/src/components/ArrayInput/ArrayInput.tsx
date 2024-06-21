import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "../../services/fetch.ts";
import "./ArrayInput.css";

type ArrayInputProps = {
  handleClick: (array: number[]) => void;
};

const ArrayInput = (props: ArrayInputProps) => {
  const [array, setArray] = useState([5, 2, 4, 3, 1]);
  const [arraySize, setArraySize] = useState(5);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleClick = () => {
    props.handleClick(array);
  };

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = array.slice();
    const index = Array.from(event.target.parentElement!.children).indexOf(
      event.target
    );
    newArray[index] = parseInt(event.target.value) || 0;
    setArray(newArray);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "ArrowRight" && index < array.length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      if (inputRefs.current[index - 1]) {
        let len = inputRefs.current[index - 1]?.value.length || 0;
        setTimeout(() => {
          inputRefs.current[index - 1]?.setSelectionRange(len, len);
        }, 0);
      }
    }
  };

  const handleChangeArraySize = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = parseInt(event.target.value) || 0;
    if (value < 4) value = 4;
    if (value > 9) value = 9;
    setArraySize(value);
  };

  useEffect(() => {
    setArray((prevArray) => {
      if (arraySize > prevArray.length) {
        const newInputRefs = inputRefs.current.slice();
        for (let i = prevArray.length; i < arraySize; i++)
          newInputRefs[i] = null;
        inputRefs.current = newInputRefs;

        return [
          ...prevArray,
          ...new Array(arraySize - prevArray.length).fill(0),
        ];
      } else {
        inputRefs.current = inputRefs.current.slice(0, arraySize);
        return prevArray.slice(0, arraySize);
      }
    });
  }, [arraySize]);

  return (
    <>
      <div id="rootArrayInput">
        {array.map((element: number, index: number) => {
          return (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="arrayElementInput"
              value={element}
              onChange={(event) => onChangeInputValue(event)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          );
        })}
        <input
          id="arraySizeInput"
          type="number"
          value={arraySize}
          onChange={handleChangeArraySize}
        />
      </div>
      <div></div>
      <button onClick={handleClick}>Sort</button>
    </>
  );
};

export default ArrayInput;

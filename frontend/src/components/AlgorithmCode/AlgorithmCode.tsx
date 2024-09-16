import {
  height,
  width,
} from "@fortawesome/free-regular-svg-icons/faAddressBook";
import "./AlgorithmCode.css";
import { dracula, CodeBlock, monoBlue, github } from "react-code-blocks";

const code = ` function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
`;

const customStyles = {
  textAlign: "left",
  fontSize: "20px",
  width: "100%",
};

const language = "javascript";
const showLineNumbers = true;
const startingLineNumber = 1;

const AlgorithmCode = () => {
  return (
    <div id="algorithm-code-root">
      <CodeBlock
        customStyle={customStyles}
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={dracula}
      />
    </div>
  );
};

export default AlgorithmCode;

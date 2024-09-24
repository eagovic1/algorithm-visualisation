import "./AlgorithmCode.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

const language = "javascript";
const showLineNumbers = true;
const startingLineNumber = 1;

const AlgorithmCode = () => {
  return (
    <div id="algorithm-code-root">
      <SyntaxHighlighter
        language={language}
        startingLineNumber={startingLineNumber}
        showLineNumbers={showLineNumbers}
        customStyle={{ fontSize: "20px", margin: 0 }}
        style={dracula}
      >
        {code}

      </SyntaxHighlighter>
    </div>
  );
};

export default AlgorithmCode;

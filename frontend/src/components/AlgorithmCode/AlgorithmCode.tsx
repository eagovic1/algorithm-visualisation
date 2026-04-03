import "./AlgorithmCode.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface AlgorithmCodeProps {
  code: string;
}

const AlgorithmCode = ({ code }: AlgorithmCodeProps) => {
  return (
    <div id="algorithm-code-root">
      <SyntaxHighlighter
        language="javascript"
        startingLineNumber={1}
        showLineNumbers={true}
        customStyle={{ fontSize: "20px", margin: 0 }}
        style={dracula}
      >
        {code || "// Code not available"}
      </SyntaxHighlighter>
    </div>
  );
};

export default AlgorithmCode;

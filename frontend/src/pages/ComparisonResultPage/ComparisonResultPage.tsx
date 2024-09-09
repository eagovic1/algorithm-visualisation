import { useLocation } from "react-router-dom";
import "./ComparisonResultPage.css";

const ComparisonResultPage = () => {
  const location = useLocation();
  const comparison = location?.state?.comparison;
  const inputArray = location?.state?.array;

  const algorithmFirst = comparison.algorithmFirst;
  const algorithmSecond = comparison.algorithmSecond;

  return (
    <div id="comparison-results-root">
      <div id="title">
        <p>Comparison Result</p>
      </div>

      <div id="input">
        <div id="input-array">
          <b>Input array:</b> {inputArray.join(", ")}
        </div>
      </div>

      <div id="comparison-results">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>{algorithmFirst.name}</th>
              <th>{algorithmSecond.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td>{algorithmFirst.timeComplexity}</td>
              <td>{algorithmSecond.timeComplexity}</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>{algorithmFirst.spaceComplexity}</td>
              <td>{algorithmSecond.spaceComplexity}</td>
            </tr>
            <tr>
              <td>Comparisons</td>
              <td>{algorithmFirst.comparisons}</td>
              <td>{algorithmSecond.comparisons}</td>
            </tr>
            <tr>
              <td>Swaps</td>
              <td>{algorithmFirst.swaps}</td>
              <td>{algorithmSecond.swaps}</td>
            </tr>
            <tr>
              <td>Write operations</td>
              <td>{algorithmFirst.writeOperations}</td>
              <td>{algorithmSecond.writeOperations}</td>
            </tr>
            <tr>
              <td>Read operations</td>
              <td>{algorithmFirst.readOperations}</td>
              <td>{algorithmSecond.readOperations}</td>
            </tr>
            <tr>
              <td>Memory Used</td>
              <td>{algorithmFirst.memoryUsed}</td>
              <td>{algorithmSecond.memoryUsed}</td>
            </tr>
            <tr>
              <td>Time Taken</td>
              <td>{algorithmFirst.timeTaken}</td>
              <td>{algorithmSecond.timeTaken}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonResultPage;

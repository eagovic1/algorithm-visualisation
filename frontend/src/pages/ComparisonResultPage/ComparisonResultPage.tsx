import { useLocation } from "react-router-dom";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
} from "react-vis";
import "./ComparisonResultPage.css";

const ComparisonResultPage = () => {
  const location = useLocation();
  const comparison = location?.state?.comparison;
  const inputArray = location?.state?.array;

  const algorithmFirst = comparison.algorithmFirst;
  const algorithmSecond = comparison.algorithmSecond;

  const timeTakenChartData = [
    { y: algorithmFirst.name, x: algorithmFirst.timeTaken, color: "#1f77b4" },
    { y: algorithmSecond.name, x: algorithmSecond.timeTaken, color: "#ff7f0e" },
  ];

  const memoryUsedChartData = [
    { y: algorithmFirst.name, x: algorithmFirst.memoryUsed, color: "#1f77b4" },
    {
      y: algorithmSecond.name,
      x: algorithmSecond.memoryUsed,
      color: "#ff7f0e",
    },
  ];

  const comparisonsChartData = [
    {
      y: algorithmFirst.name,
      x: algorithmFirst.comparisons,
      color: "#1f77b4",
    },
    {
      y: algorithmSecond.name,
      x: algorithmSecond.comparisons,
      color: "#ff7f0e",
    },
  ];

  const swapsChartData = [
    { y: algorithmFirst.name, x: algorithmFirst.swaps, color: "#1f77b4" },
    { y: algorithmSecond.name, x: algorithmSecond.swaps, color: "#ff7f0e" },
  ];

  const writeOperationsChartData = [
    {
      y: algorithmFirst.name,
      x: algorithmFirst.writeOperations,
      color: "#1f77b4",
    },
    {
      y: algorithmSecond.name,
      x: algorithmSecond.writeOperations,
      color: "#ff7f0e",
    },
  ];

  const readOperationsChartData = [
    {
      y: algorithmFirst.name,
      x: algorithmFirst.readOperations,
      color: "#1f77b4",
    },
    {
      y: algorithmSecond.name,
      x: algorithmSecond.readOperations,
      color: "#ff7f0e",
    },
  ];

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
        <table className="table table-striped">
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
              <td>Memory Used (in bytes)</td>
              <td>{algorithmFirst.memoryUsed}</td>
              <td>{algorithmSecond.memoryUsed}</td>
            </tr>
            <tr>
              <td>Time Taken (in miliseconds)</td>
              <td>{algorithmFirst.timeTaken}</td>
              <td>{algorithmSecond.timeTaken}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="comparison-charts">
        <div className="comparison-chart">
          <div className="chart-title">Time Taken (in miliseconds)</div>
          <XYPlot
            width={300}
            height={150}
            stackBy="x"
            yType="ordinal"
            margin={{ left: 120, right: 10, bottom: 50 }} // Adjusted margins
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <HorizontalBarSeries
              barWidth={0.5}
              colorType="literal"
              data={timeTakenChartData}
            />
          </XYPlot>
        </div>
        <div className="comparison-chart">
          <div className="chart-title">Memory Used (in bytes)</div>
          <XYPlot
            width={300}
            height={150}
            stackBy="x"
            yType="ordinal"
            margin={{ left: 120, right: 10, bottom: 50 }} // Adjusted margins
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <HorizontalBarSeries
              barWidth={0.5}
              colorType="literal"
              data={memoryUsedChartData}
            />
          </XYPlot>
        </div>
        <div className="comparison-chart">
          <div className="chart-title">Comparisons</div>
          <XYPlot
            width={300}
            height={150}
            stackBy="x"
            yType="ordinal"
            margin={{ left: 120, right: 10, bottom: 50 }} // Adjusted margins
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <HorizontalBarSeries
              barWidth={0.5}
              colorType="literal"
              data={comparisonsChartData}
            />
          </XYPlot>
        </div>
        <div className="comparison-chart">
          <div className="chart-title">Swaps</div>
          <XYPlot
            width={300}
            height={150}
            stackBy="x"
            yType="ordinal"
            margin={{ left: 120, right: 10, bottom: 50 }} // Adjusted margins
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <HorizontalBarSeries
              barWidth={0.5}
              colorType="literal"
              data={swapsChartData}
            />
          </XYPlot>
        </div>
        <div className="comparison-chart">
          <div className="chart-title">Write Operations</div>
          <XYPlot
            width={300}
            height={150}
            stackBy="x"
            yType="ordinal"
            margin={{ left: 120, right: 10, bottom: 50 }} // Adjusted margins
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <HorizontalBarSeries
              barWidth={0.5}
              colorType="literal"
              data={writeOperationsChartData}
            />
          </XYPlot>
        </div>
        <div className="comparison-chart">
          <div className="chart-title">Read Operations</div>
          <XYPlot
            width={300}
            height={150}
            stackBy="x"
            yType="ordinal"
            margin={{ left: 120, right: 10, bottom: 50 }} // Adjusted margins
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <HorizontalBarSeries
              barWidth={0.5}
              colorType="literal"
              data={readOperationsChartData}
            />
          </XYPlot>
        </div>
      </div>
    </div>
  );
};

export default ComparisonResultPage;

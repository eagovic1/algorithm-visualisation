import React, { useState } from "react";
import "./ComparisonHomePage.css";
import ArrayInput from "../../components/ArrayInput/ArrayInput";
import { fetchData } from "../../services/fetch";
import { useNavigate } from "react-router-dom";

const ComparisonHomePage = () => {
  const [algorithm1, setAlgorithm1] = useState("bubble");
  const [algorithm2, setAlgorithm2] = useState("selection");
  const navigate = useNavigate();

  function handleClick(array: number[]) {
    console.log("ArrayInput clicked");

    if (algorithm1 === algorithm2) {
      alert("Please select two different algorithms");
      return;
    }

    console.log("Array: ", array);
    console.log("Algorithm 1: ", algorithm1);
    console.log("Algorithm 2: ", algorithm2);

    fetchData("http://localhost:3000/api/analysis/compare", "POST", {
      array: array,
      algorithmKey: algorithm1,
      algorithmKeySec: algorithm2,
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);

        // Redirect to comparison result page
        navigate(`/comparison/result/${algorithm1}/${algorithm2}`, {
          state: { comparison: response.data, array: array },
        });
      } else {
        alert("Comparison failed");
      }
    });
  }

  return (
    <>
      <div id="comparison-root">
        <div id="title">
          <p>
            Choose sorting algorithms to compare their performance using the
            same input array
          </p>
        </div>
        <div id="algorithm-select">
          <select
            id="algorithm-select-1"
            className="algorithm-select"
            value={algorithm1}
            onChange={(e) => setAlgorithm1(e.target.value)}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="shell">Shell Sort</option>
            <option value="quick">Quick Sort</option>
          </select>

          <select
            id="algorithm-select-2"
            className="algorithm-select"
            value={algorithm2}
            onChange={(e) => setAlgorithm2(e.target.value)}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="shell">Shell Sort</option>
            <option value="quick">Quick Sort</option>
          </select>
        </div>

        <ArrayInput handleClick={handleClick} />
      </div>
    </>
  );
};

export default ComparisonHomePage;

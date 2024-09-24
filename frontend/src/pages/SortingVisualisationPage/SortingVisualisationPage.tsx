import SortingArray from "../../components/SortingArray/SortingArray";
import { useLocation } from "react-router-dom";
import AlgorithmCode from "../../components/AlgorithmCode/AlgorithmCode";
import "./SortingVisualisationPage.css";

const SortingVisualisationPage = () => {
  const location = useLocation();
  const instructions = location.state.instructions;
  const array = location.state.array;
  return (
    <>
      <div id="sorting-visualisation-page">
        <SortingArray array={array} instructions={instructions} />
        <AlgorithmCode />
      </div>
    </>
  );
};

export default SortingVisualisationPage;

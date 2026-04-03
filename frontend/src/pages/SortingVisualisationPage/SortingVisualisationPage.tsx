import SortingArray from "../../components/SortingArray/SortingArray";
import { useLocation } from "react-router-dom";
import AlgorithmCode from "../../components/AlgorithmCode/AlgorithmCode";
import "./SortingVisualisationPage.css";

const SortingVisualisationPage = () => {
  const location = useLocation();
  const { instructions, array, code } = location.state;
  return (
    <>
      <div id="sorting-visualisation-page">
        <SortingArray array={array} instructions={instructions} />
        <AlgorithmCode code={code} />
      </div>
    </>
  );
};

export default SortingVisualisationPage;

import React from "react";
import SortingArray from "../../components/SortingArray/SortingArray";
import { useLocation } from "react-router-dom";

const SortingVisualisationPage = () => {
  const location = useLocation();
  const instructions = location.state.instructions;
  const array = location.state.array;
  return (
    <>
      <SortingArray array={array} instructions={instructions} />
    </>
  );
};

export default SortingVisualisationPage;

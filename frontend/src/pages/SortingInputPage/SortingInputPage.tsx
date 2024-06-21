import React from "react";
import ArrayInput from "../../components/ArrayInput/ArrayInput";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../services/fetch";

const SortingInputPage = () => {
  const navigate = useNavigate();
  const { algorithmKey } = useParams();
  function sortArray(array: number[]) {
    fetchData(`http://localhost:3000/api/sort/${algorithmKey}/steps`, "POST", {
      array: array,
    }).then((response) => {
      console.log(response);
      navigate(`/visualisation/sorting/${algorithmKey}`, {
        state: { instructions: response.data, array: array },
      });
    });
  }

  return (
    <>
      <ArrayInput handleClick={sortArray} />
    </>
  );
};

export default SortingInputPage;

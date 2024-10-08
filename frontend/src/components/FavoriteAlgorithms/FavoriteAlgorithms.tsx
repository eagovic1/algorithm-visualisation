import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/fetch";
import "./FavoriteAlgorithms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const FavoriteAlgorithms = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [favoriteAlgorithms, setFavoriteAlgorithms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("userData"));
    fetchData("http://localhost:3000/api/user/favorites", "GET").then(
      (response) => {
        console.log(response);
        setFavoriteAlgorithms(response.data);
        setDataLoaded(true);
      }
    );
  }, []);

  function handleClick(algorithmKey: string) {
    const category = "sorting";
    navigate(`/input/${category}/${algorithmKey}`);
  }

  if (!dataLoaded) return <h1>Loading...</h1>;
  if (favoriteAlgorithms.length === 0) return <></>;
  return (
    <>
      <div id="favorite-algorithms-root">
        <div className="section-title">Favorite Algorithms</div>
        <div id="favorite-algorithms">
          {favoriteAlgorithms.map((algorithm) => {
            return (
              <>
                <div
                  className="algorithm-card"
                  onClick={() => handleClick(algorithm["key"])}
                >
                  <div className="detail-wrap">
                    <p className="algorithm-name">{algorithm["name"]}</p>
                    <p className="algorithm-category">
                      {algorithm["category"]["name"]}
                    </p>
                  </div>
                  <FontAwesomeIcon className="fav-icon" icon={faStar} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavoriteAlgorithms;

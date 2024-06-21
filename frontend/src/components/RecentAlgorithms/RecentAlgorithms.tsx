import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/fetch";
import "./RecentAlgorithms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const RecentAlgorithms = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [recentAlgorithms, setRecentAlgorithms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("userData"));
    fetchData("http://localhost:3000/api/user/recent", "GET").then(
      (response) => {
        console.log(response);
        setRecentAlgorithms(response.data);
        setDataLoaded(true);
      }
    );
  }, []);

  function handleClick(algorithmKey: string) {
    const category = "sorting"
    navigate(`/input/${category}/${algorithmKey}`);
  }

  if (!dataLoaded) return <h1>Loading...</h1>;
  return (
    <>
      <div className="section-title">Recent Algorithms</div>
      <div id="recent-algorithms">
        {recentAlgorithms.map((algorithm) => {
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
    </>
  );
};

export default RecentAlgorithms;

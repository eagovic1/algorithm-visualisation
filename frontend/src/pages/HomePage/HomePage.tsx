import React from "react";
import RecentAlgorithms from "../../components/RecentAlgorithms/RecentAlgorithms";
import FavoriteAlgorithms from "../../components/FavoriteAlgorithms/FavoriteAlgorithms";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="home-page">
      <FavoriteAlgorithms />
      <RecentAlgorithms />
      <div id="home-page-wrap">
        <div id="visualize-card" className="feature-card">VISUALIZE</div>
        <div id="compare-card" className="feature-card">COMPARE</div>
      </div>
    </div>
  );
};

export default HomePage;

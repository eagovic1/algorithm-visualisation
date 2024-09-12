import RecentAlgorithms from "../../components/RecentAlgorithms/RecentAlgorithms";
import FavoriteAlgorithms from "../../components/FavoriteAlgorithms/FavoriteAlgorithms";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(route);
  }

  return (
    <div id="home-page">
      <FavoriteAlgorithms />
      <RecentAlgorithms />
      <div id="home-page-wrap">
        <div
          onClick={() => handleClick("/visualisation")}
          id="visualize-card"
          className="feature-card"
        >
          VISUALIZE
        </div>
        <div
          onClick={() => handleClick("/comparison")}
          id="compare-card"
          className="feature-card"
        >
          COMPARE
        </div>
      </div>
    </div>
  );
};

export default HomePage;

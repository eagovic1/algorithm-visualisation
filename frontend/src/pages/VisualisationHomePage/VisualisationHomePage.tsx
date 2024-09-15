import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetch";
import "./VisualisationHomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarFilled } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Snackbar from "../../components/Snackbar/Snackbar"; // Import Snackbar component

const VisualisationHomePage = () => {
  const [algorithmsLoaded, setAlgorithmsLoaded] = useState(false);
  const [algorithms, setAlgorithms] = useState([]);
  const [favoriteAlgorithmsLoaded, setFavoriteAlgorithmsLoaded] =
    useState(false);
  const [favoriteAlgorithms, setFavoriteAlgorithms] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData("http://localhost:3000/api/algorithm/all", "GET").then(
      (response) => {
        setAlgorithms(response.data);
        setAlgorithmsLoaded(true);
      }
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:3000/api/user/favorites", "GET").then(
      (response) => {
        setFavoriteAlgorithms(response.data);
        setFavoriteAlgorithmsLoaded(true);
      }
    );
  }, []);

  function isFavorite(algorithmId: number) {
    return favoriteAlgorithms.find(
      (algorithm) => algorithm["id"] === algorithmId
    );
  }

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  function handleClick(algorithmKey: string) {
    const category = "sorting";
    navigate(`/input/${category}/${algorithmKey}`);
  }

  if (!algorithmsLoaded || !favoriteAlgorithmsLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="visualisation-home-page">
        <div className="section-title">Sorting Algorithms</div>
        <div id="sorting-algorithms">
          {algorithms.map((algorithm) => (
            <div
              key={algorithm["id"]}
              className="algorithm-card"
              onClick={() => handleClick(algorithm["key"])}
            >
              <div className="detail-wrap">
                <p className="algorithm-name">{algorithm["name"]}</p>
                <p className="algorithm-category">
                  {algorithm["category"]["name"]}
                </p>
              </div>
              <FontAwesomeIcon
                className="fav-icon"
                onClick={(event) => {
                  event.stopPropagation(); // Prevent triggering the card click
                  if (isFavorite(algorithm["id"])) {
                    fetchData(
                      `http://localhost:3000/api/user/favorite/${algorithm["id"]}`,
                      "DELETE"
                    ).then(() => {
                      setFavoriteAlgorithms(
                        favoriteAlgorithms.filter(
                          (element) => element["id"] !== algorithm["id"]
                        )
                      );
                      showSnackbar("Removed from favorites");
                    });
                  } else {
                    fetchData(
                      `http://localhost:3000/api/user/favorite/${algorithm["id"]}`,
                      "POST"
                    ).then(() => {
                      setFavoriteAlgorithms([...favoriteAlgorithms, algorithm]);
                      showSnackbar("Added to favorites");
                    });
                  }
                }}
                icon={isFavorite(algorithm["id"]) ? StarFilled : StarEmpty}
              />
            </div>
          ))}
        </div>

        {/* Render the Snackbar component outside of the map loop */}
        <Snackbar
          message={snackbarMessage}
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
        />
      </div>
    </>
  );
};

export default VisualisationHomePage;

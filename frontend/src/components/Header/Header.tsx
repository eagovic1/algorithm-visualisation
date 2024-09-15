import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchData } from "../../services/fetch";

const Header = () => {
  const navigator = useNavigate();
  
  return (
    <header className="header">
      <div className="header-content">
        <div className="company-name">
          <p>AlgoViz</p>
        </div>
        <nav className="nav-links">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/visualisation">
            Visualisation
          </Link>
          <Link className="nav-link" to="/comparison">
            Comparison
          </Link>
        </nav>
        <div id="logout">
          <FontAwesomeIcon icon={faSignOut} onClick={
            () => {
              fetchData("http://localhost:3000/api/user/logout", "POST", {}).then((response) => {
                if (response.status === 200) {
                  navigator("/login");
                }
              });
            }
          } />
        </div>
      </div>
    </header>
  );
};

export default Header;

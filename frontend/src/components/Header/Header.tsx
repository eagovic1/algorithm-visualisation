import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { faCaretDown, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchData } from "../../services/fetch";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navigator = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Definiramo tip kao HTMLDivElement

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    fetchData("http://localhost:3000/api/user/logout", "POST", {}).then(
      (response) => {
        if (response.status === 200) {
          navigator("/login");
        }
      }
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
          <div className="dropdown" ref={dropdownRef}>
            <div className="nav-link" onClick={toggleDropdown}>
              Admin
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ marginLeft: "5px" }}
              />
            </div>
            {dropdownOpen && (
              <div className="dropdown-content">
                <Link
                  className="dropdown-link"
                  to="/admin/categories"
                  onClick={() => setDropdownOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  className="dropdown-link"
                  to="/admin/algorithms"
                  onClick={() => setDropdownOpen(false)}
                >
                  Algorithms
                </Link>
                <Link
                  className="dropdown-link"
                  to="/admin/users"
                  onClick={() => setDropdownOpen(false)}
                >
                  Users
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div id="logout">
          <FontAwesomeIcon
            icon={faSignOut}
            onClick={() => {
              handleLogout();
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { faCaretDown, faSignOut, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const navigator = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout().then(() => {
      navigator("/login");
    });
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
          {user && (
            <>
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
            </>
          )}
        </nav>
        <div id="logout">
          {user ? (
            <FontAwesomeIcon icon={faSignOut} onClick={handleLogout} />
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

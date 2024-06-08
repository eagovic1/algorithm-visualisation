import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="company-name">
          <h1>AlgoViz</h1>
        </div>
        <nav className="nav-links">
          <Link className='nav-link' to="/home">Home</Link>
          <Link className='nav-link' to="/visualisation">Visualisation</Link>
          <Link className='nav-link' to="/comparison">Comparison</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/" className="nav-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/explore" className="nav-link">
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/catagories" className="nav-link">
              Catagories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/account" className="nav-link">
              Account
            </Link>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;

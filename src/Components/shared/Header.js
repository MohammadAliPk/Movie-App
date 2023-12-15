import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {

  return (
    <nav className="bm-item-list">
      <h1 id="logo" className="bm-item">Movie App</h1>
      <Link to="/movies" className="bm-item">
        Movies
      </Link>
      <Link to="/series" className="bm-item">
        Series
      </Link>
      <Link to="/trending" className="bm-item">
        Trendings
      </Link>
    </nav>
  );
};

export default Header;

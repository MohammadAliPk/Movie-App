import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Movie App</h1>
      <Link to="/movies" className={styles.link}>
        Movies
      </Link>
      <Link to="/series" className={styles.link}>
        Series
      </Link>
      <Link to="trending" className={styles.link}>
        Trendings
      </Link>
    </div>
  );
};

export default Header;

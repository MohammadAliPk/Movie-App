import React, { useContext } from "react";
import CardTrending from "./shared/CardTrending";

// Styles
import styles from "./Pages.module.css";

// Context
import { TrendingContext } from "../Context/TrendingContextProvider";

const Trendings = () => {
  const trendings = useContext(TrendingContext);

  return (
    <div>
      <div className={styles.cardContainer}>
        {trendings.map((top) => (
          <CardTrending data={top} key={top.id}></CardTrending>
        ))}
      </div>
    </div>
  );
};

export default Trendings;

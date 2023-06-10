import React, { useContext } from "react";
import CardTrending from "./shared/CardTrending";

// Context
import { TrendingContext } from "../Context/TrendingContextProvider";

const Trendings = () => {
  const trendings = useContext(TrendingContext);

  return (
    <div>
      {trendings.map((top) => (
        <CardTrending data={top} key={top.id}></CardTrending>
      ))}
    </div>
  );
};

export default Trendings;

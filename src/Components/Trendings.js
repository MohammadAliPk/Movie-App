import React, { useContext } from "react";
import CardMovie from "./shared/CardMovie";

// Context
import { TrendingContext } from "../Context/TrendingContextProvider";
const Trendings = () => {
  const trendings = useContext(TrendingContext);

  return (
    <div>
      {trendings.map((top) => (
        <CardMovie data={top} key={top.id}></CardMovie>
      ))}
    </div>
  );
};

export default Trendings;

import React, { useContext } from "react";
import Card from "./shared/Card";

// Context
import { TrendingContext } from "../Context/TrendingContextProvider";
const Trendings = () => {
  const trendings = useContext(TrendingContext);

  return (
    <div>
      {trendings.map((top) => (
        <Card data={top} key={top.id}></Card>
      ))}
    </div>
  );
};

export default Trendings;

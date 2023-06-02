import React, { useContext } from "react";
import Card from "./shared/Card";

// Context
import { SeriesContext } from "../Context/SeriesContextProvider";

const Series = () => {
  const series = useContext(SeriesContext);

  return (
    <div>
      {series.map((serie) => (
        <Card data={serie} key={serie.id}></Card>
      ))}
    </div>
  );
};

export default Series;

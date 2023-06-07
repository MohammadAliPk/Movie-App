import React, { useContext } from "react";

import { useParams } from "react-router-dom";

// Components
import CardSeries from "./shared/CardSeries";

// Context
import SeriesContextProvider, {
  SeriesContext,
} from "../Context/SeriesContextProvider";

const Series = () => {
  const params = useParams();
  const id = params.id;

  const series = useContext(SeriesContext);

  return (
    <div>
      <SeriesContextProvider id={id} />
      {series.map((serie) => (
        <CardSeries data={serie} key={serie.id}></CardSeries>
      ))}
    </div>
  );
};

export default Series;

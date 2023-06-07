import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

// Components
import CardSeries from "./shared/CardSeries";

// Context
import { SeriesContext } from "../Context/SeriesContextProvider";

// API
import { getSeries } from "../services/api";

const SeriesPage = () => {
  const params = useParams();
  const id = params.id;

  const { series, setSeries } = useContext(SeriesContext);

  useEffect(() => {
    const fetchSeries = async () => {
      const movies = await getSeries(id);
      setSeries(movies);
    };
    fetchSeries();
  }, [id, setSeries]);

  return (
    <div>
      {series.map((serie) => (
        <CardSeries data={serie} key={serie.id}></CardSeries>
      ))}
    </div>
  );
};

export default SeriesPage;

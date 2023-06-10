import React, { useContext, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";

// Components
import CardSeries from "./shared/CardSeries";
import CustomPagination from "./shared/Pagination";

// Context
import { SeriesContext } from "../Context/SeriesContextProvider";

// API
import { getSeries } from "../services/api";

const SeriesPage = () => {
  const params = useParams();
  const id = params.id;
  const location = useLocation();

  const { series, setSeries } = useContext(SeriesContext);

  useEffect(() => {
    const fetchSeries = async () => {
      const movies = await getSeries(id);
      setSeries(movies);
      console.log(movies);
    };
    fetchSeries();
  }, [id, setSeries]);

  return (
    <div>
      {series.map((serie) => (
        <CardSeries data={serie} key={serie.id} type="tv"></CardSeries>
      ))}
      <CustomPagination
        currentPage={params.page}
        totalPages={500}
        variableName="series"
        location={location}
      />
    </div>
  );
};

export default SeriesPage;

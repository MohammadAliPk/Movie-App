import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// Styles
import styles from "./Pages.module.css";

// Components
import Card from "./shared/Card";
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
      <div className={styles.cardContainer}>
        {series.map((serie) => (
          <Card data={serie} key={serie.id} type="tv"></Card>
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <CustomPagination
          currentPage={params.page}
          totalPages={500}
          variableName="series"
          location={location}
        />
      </div>
    </div>
  );
};

export default SeriesPage;

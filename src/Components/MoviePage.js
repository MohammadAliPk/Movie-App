import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// Styles
import styles from "./Pages.module.css";

// Components
import Card from "./shared/Card";
import CustomPagination from "./shared/Pagination";

// Context
import { MovieContext } from "../Context/MovieContextProvider";

// API
import { getMovies } from "../services/api";

const MoviePage = () => {
  const params = useParams();
  const id = params.id;
  const location = useLocation();

  const { movies, setMovies } = useContext(MovieContext);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies(id);
      setMovies(data);
    };

    fetchMovies();
  }, [id, setMovies]);

  return (
    <div>
      <div className={styles.cardContainer}>
        {movies.map((movie) => (
          <Card
            className={styles.card}
            data={movie}
            key={movie.id}
            type="movie"
          ></Card>
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <CustomPagination
          currentPage={params.page}
          totalPages={500}
          variableName="movies"
          location={location}
        />
      </div>
    </div>
  );
};

export default MoviePage;

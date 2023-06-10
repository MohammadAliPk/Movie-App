import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// Components
import CardMovie from "./shared/CardMovie";
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
      {movies.map((movie) => (
        <CardMovie data={movie} key={movie.id} type="movie"></CardMovie>
      ))}
      <CustomPagination
        currentPage={params.page}
        totalPages={500}
        variableName="movies"
        location={location}
      />
    </div>
  );
};

export default MoviePage;

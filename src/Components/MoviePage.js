import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import CardMovie from "./shared/CardMovie";

// Context
import { MovieContext } from "../Context/MovieContextProvider";

// API
import { getMovies } from "../services/api";

const MoviePage = () => {
  const params = useParams();
  const id = params.id;

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
        <CardMovie data={movie} key={movie.id}></CardMovie>
      ))}
    </div>
  );
};

export default MoviePage;

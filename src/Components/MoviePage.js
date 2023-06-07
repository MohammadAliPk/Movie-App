import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import MovieContextProvider, {
  MovieContext,
} from "../Context/MovieContextProvider";

// Components
import CardMovie from "./shared/CardMovie";

const MoviePage = () => {
  const params = useParams();
  const id = params.id;

  const movies = useContext(MovieContext);

  return (
    <div>
      <MovieContextProvider id={id} />
      {movies.map((movie) => (
        <CardMovie data={movie} key={movie.id}></CardMovie>
      ))}
    </div>
  );
};

export default MoviePage;

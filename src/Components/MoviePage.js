import React, { useContext } from "react";

// Context
import { MovieContext } from "../Context/MovieContextProvider";
import Card from "./shared/Card";

const MoviePage = () => {
  const movies = useContext(MovieContext);
  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <Card data={movie} key={movie.id}></Card>
      ))}
    </div>
  );
};

export default MoviePage;

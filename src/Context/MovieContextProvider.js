import React, { useEffect, useState } from "react";

// API
import { getMovies } from "../services/api";

export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setMovies(await getMovies(3));
    };
    fetchApi();
  }, []);
  console.log(movies);
  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;

import React, { useEffect, useState } from "react";

// API
import { getMovies } from "../services/api";

export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setMovies(await getMovies(5));
    };
    fetchApi();
  }, []);
  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;

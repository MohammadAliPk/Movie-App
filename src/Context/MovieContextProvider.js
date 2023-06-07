import React, { useState } from "react";

export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

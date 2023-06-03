import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import MovieContextProvider from "./Context/MovieContextProvider";
import SeriesContextProvider from "./Context/SeriesContextProvider";
import TopRatedContextProvider from "./Context/TrendingContextProvider";

// Components
import Series from "./Components/Series";
import MoviePage from "./Components/MoviePage";
import Trendings from "./Components/Trendings";

const App = () => {
  return (
    <div>
      <MovieContextProvider>
        <SeriesContextProvider>
          <TopRatedContextProvider>
            <Routes>
              <Route path="/movies" element={<MoviePage />} />
              <Route path="/series" element={<Series />} />
              <Route path="/trending" element={<Trendings />} />
              <Route path="/" element={<Navigate to="/movies" />} />
            </Routes>
          </TopRatedContextProvider>
        </SeriesContextProvider>
      </MovieContextProvider>
    </div>
  );
};

export default App;

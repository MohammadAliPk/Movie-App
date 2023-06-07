import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import MovieContextProvider from "./Context/MovieContextProvider";
import SeriesContextProvider from "./Context/SeriesContextProvider";
import TopRatedContextProvider from "./Context/TrendingContextProvider";

// Components
import SeriesPage from "./Components/SeriesPage";
import MoviePage from "./Components/MoviePage";
import Trendings from "./Components/Trendings";

const App = () => {
  return (
    <div>
      <MovieContextProvider>
        <SeriesContextProvider>
          <TopRatedContextProvider>
            <Routes>
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/series/:id" element={<SeriesPage />} />
              <Route path="/trending" element={<Trendings />} />
              <Route path="/*" element={<Navigate to="/movies/1" />} />
              <Route path="/series" element={<Navigate to="/series/1" />} />
            </Routes>
          </TopRatedContextProvider>
        </SeriesContextProvider>
      </MovieContextProvider>
    </div>
  );
};

export default App;

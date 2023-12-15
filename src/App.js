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
import Details from "./Components/Details";
import Header from "./Components/shared/Header";
import Footer from "./Components/shared/Footer";

// Header styles
import "./Components/shared/Header.css";

const App = () => {


  return (
    <div id="outer-container">
      <MovieContextProvider>
        <SeriesContextProvider>
          <TopRatedContextProvider>
            <Header />
            <main id="page-wrap">
              <Routes >
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/series/:id" element={<SeriesPage />} />
                <Route path="/trending" element={<Trendings />} />
                <Route path="/*" element={<Navigate to="/movies/1" />} />
                <Route path="/series" element={<Navigate to="/series/1" />} />
                <Route path="/detail/:type/:id" element={<Details />} />
              </Routes>
            </main>
            <Footer />
          </TopRatedContextProvider>
        </SeriesContextProvider>
      </MovieContextProvider>
    </div >
  );
};

export default App;

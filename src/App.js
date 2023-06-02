import React from "react";

// Context
import MovieContextProvider from "./Context/MovieContextProvider";
import SeriesContextProvider from "./Context/SeriesContextProvider";

const App = () => {
  return (
    <div>
      <MovieContextProvider>
        <SeriesContextProvider>
          <div></div>
        </SeriesContextProvider>
      </MovieContextProvider>
    </div>
  );
};

export default App;

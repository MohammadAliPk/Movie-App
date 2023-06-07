import React, { useState } from "react";

export const SeriesContext = React.createContext();

const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  return (
    <SeriesContext.Provider value={{ series, setSeries }}>
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;

import React, { useEffect, useState } from "react";

// API
import { getSeries } from "../services/api";

export const SeriesContext = React.createContext();

const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setSeries(await getSeries(5));
    };
    fetchApi();
  }, []);
  return (
    <SeriesContext.Provider value={series}>{children}</SeriesContext.Provider>
  );
};

export default SeriesContextProvider;

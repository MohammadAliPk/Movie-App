import React, { useEffect, useState } from "react";

// API
import { getSeries } from "../services/api";

export const SeriesContext = React.createContext();

const SeriesContextProvider = ({ children, id }) => {
  const [series, setSeries] = useState([]);
  console.log(series);

  useEffect(() => {
    const fetchApi = async () => {
      setSeries(await getSeries(id));
    };
    fetchApi();
  }, [id]);
  return (
    <SeriesContext.Provider value={series}>{children}</SeriesContext.Provider>
  );
};

export default SeriesContextProvider;

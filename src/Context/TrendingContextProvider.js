import React, { useEffect, useState } from "react";

// API
import { getTrending } from "../services/api";

export const TrendingContext = React.createContext();

const TrendingContextProvider = ({ children }) => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setTrendings(await getTrending(5));
    };
    fetchApi();
  }, []);
  return (
    <TrendingContext.Provider value={trendings}>
      {children}
    </TrendingContext.Provider>
  );
};

export default TrendingContextProvider;

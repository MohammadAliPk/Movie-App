import axios from "axios";

const getMovies = async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
  );
  return response.data.results;
};

const getSeries = async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`
  );
  return response.data.results;
};

const getTrending = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US"
  );
  return response.data.results;
};

export { getMovies, getSeries, getTrending };

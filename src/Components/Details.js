import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// API
import { movieDetail, seriesDetail } from "../services/api";

const Details = () => {
  const params = useParams();
  const id = params.id;
  const type = params.type;

  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    if (type === "movie") {
      const fetchMovie = async () => {
        const item = await movieDetail(id);
        setMovieData(item);
      };
      fetchMovie();
    } else {
      const fetchSeries = async () => {
        const item = await seriesDetail(id);
        setSeriesData(item);
      };
      fetchSeries();
    }
  }, [id, type]);

  if (type === "movie") {
    const {
      original_title,
      adult,
      poster_path,
      original_language,
      overview,
      vote_average,
      release_date,
      runtime,
    } = movieData;
    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />
        <h2>{original_title} :نام فیلم</h2>
        <h4> {original_language} :زبان فیلم</h4>
        <h3>{overview}</h3>
        <p>مدت زمان: {runtime} دقیقه</p>
        <span>امتیاز: {vote_average}</span>
        <p>رده سنی بزرگسال:{adult ? "بله" : "خیر"}</p>
        <h4>تاریخ پخش: {release_date}</h4>
      </div>
    );
  } else {
    const {
      name,
      adult,
      poster_path,
      number_of_episodes,
      number_of_seasons,
      original_language,
      overview,
      vote_average,
      first_air_date,
      runtime,
    } = seriesData;
    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={name}
        />
        <h2>{name} :نام سریال</h2>
        <h4> {original_language} :زبان سریال</h4>
        <h3>{overview}</h3>
        <p>تعداد فصل ها : {number_of_seasons}</p>
        <p>تعداد قسمت ها : {number_of_episodes}</p>
        <p>مدت زمان: {runtime} دقیقه</p>
        <span>امتیاز: {vote_average}</span>
        <p>رده سنی بزرگسال:{adult ? "بله" : "خیر"}</p>
        <h4>تاریخ پخش: {first_air_date}</h4>
      </div>
    );
  }
};

export default Details;

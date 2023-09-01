import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// API
import { movieDetail, seriesDetail } from "../services/api";

// Styles
import styles from "./Details.module.css"

const Details = () => {
  const params = useParams();
  const id = params.id;
  const type = params.type;

  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [translatedOverview, setTranslatedOverview] = useState();

  useEffect(() => {
    if (type === "movie") {
      const fetchMovie = async () => {
        const item = await movieDetail(id);
        setMovieData(item);
        const options = {
          method: "POST",
          url: "https://api.edenai.run/v2/translation/automatic_translation",
          headers: {
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEyN2U1NWMtYjkzMi00ZjA3LTg5MjEtZDBjOWI3NGU1MThiIiwidHlwZSI6ImFwaV90b2tlbiJ9.Tcu9k7J7E_-iXQEWWw0ACVa6tTT-W4PlEC3PN3RSyVc",
          },
          data: {
            providers: "google",
            text: item.overview,
            source_language: "en",
            target_language: "fa",
          },
        };
        axios
          .request(options)
          .then((response) => {
            setTranslatedOverview(response.data.google.text);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      fetchMovie();
    } else {
      const fetchSeries = async () => {
        const item = await seriesDetail(id);
        setSeriesData(item);
        const options = {
          method: "POST",
          url: "https://api.edenai.run/v2/translation/automatic_translation",
          headers: {
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEyN2U1NWMtYjkzMi00ZjA3LTg5MjEtZDBjOWI3NGU1MThiIiwidHlwZSI6ImFwaV90b2tlbiJ9.Tcu9k7J7E_-iXQEWWw0ACVa6tTT-W4PlEC3PN3RSyVc",
          },
          data: {
            providers: "google",
            text: item.overview,
            source_language: "en",
            target_language: "fa",
          },
        };
        axios
          .request(options)
          .then((response) => {
            setTranslatedOverview(response.data.google.text);
          })
          .catch((error) => {
            console.error(error);
          });
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
      vote_average,
      release_date,
      runtime,
    } = movieData;
    return (
      <div className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
          className={styles.image}
        />
        <h2 className={styles.title}>نام فیلم : {original_title}</h2>
        <div className={styles.textsContainer}>
          <h4>زبان فیلم : {original_language}</h4>
          <p className={styles.overview}>خلاصه داستان : {translatedOverview}</p>
          <p>مدت زمان: {runtime} دقیقه</p>
          <span>امتیاز: {vote_average}</span>
          <p>رده سنی بزرگسال:{adult ? "بله" : "خیر"}</p>
          <h4>تاریخ پخش: {release_date}</h4>
        </div>
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
      vote_average,
      first_air_date,
      runtime,
    } = seriesData;
    return (
      <div className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={name}
          className={styles.image}
        />
        <h2 className={styles.title}>نام سریال : {name}</h2>
        <div className={styles.textsContainer}>
          <h4>زبان سریال : {original_language}</h4>
          <p className={styles.overview}>خلاصه داستان : {translatedOverview}</p>
          <p>تعداد فصل ها : {number_of_seasons}</p>
          <p>تعداد قسمت ها : {number_of_episodes}</p>
          <p>مدت زمان: {runtime} دقیقه</p>
          <span>امتیاز: {vote_average}</span>
          <p>رده سنی بزرگسال:{adult ? "بله" : "خیر"}</p>
          <h4>تاریخ پخش: {first_air_date}</h4>
        </div>
      </div>
    );
  }
};

export default Details;

import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./Card.module.css";

// Functions
import { shorten } from "../../helpers/functions";

const Card = (props) => {
  const {
    title,
    name,
    original_language,
    vote_average,
    poster_path,
    id,
    media_type,
  } = props.data;

  return (
    <div className={styles.container}>
      <div className={styles.voteContainer}>
        <span className={styles.vote}>{vote_average}</span>
      </div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="poster"
      />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          {media_type === "movie" ? shorten(title) : shorten(name)}
        </h2>
        <h3 className={styles.language}>{original_language}</h3>
      </div>
      <Link className={styles.link} to={`/detail/${media_type}/${id}`}>
        Details
      </Link>
    </div>
  );
};

export default Card;

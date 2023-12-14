import React from "react";
import { Link } from "react-router-dom";

// Functions
import { shorten } from "../../helpers/functions";

// Styles
import styles from "./Card.module.css";

const Card = (props) => {
  const { name, title, original_language, vote_average, poster_path, id } =
    props.data;

  const type = props.type;

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
          {type === "movie" ? shorten(title) : null}
          {type !== "movie" ? shorten(name) : null}
        </h2>
        <h3 className={styles.language}>{original_language}</h3>
      </div>
      <Link className={styles.link} to={`/detail/${type}/${id}`}>
        Details
      </Link>
    </div>
  );
};

export default Card;

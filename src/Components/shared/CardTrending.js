import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {
    original_name,
    original_language,
    vote_average,
    poster_path,
    release_date,
    id,
    media_type,
  } = props.data;

  return (
    <div>
      <span>{vote_average}</span>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="poster"
      />
      <h2>{original_name}</h2>
      <div>
        <h4>{original_language}</h4>
        <h1>{release_date}</h1>
        <Link to={`/detail/${media_type}/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Card;

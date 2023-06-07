import React from "react";

const Card = (props) => {
  const { title, original_language, vote_average, poster_path, release_date } =
    props.data;

  return (
    <div>
      <span>{vote_average}</span>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="poster"
      />
      <h2>{title}</h2>
      <div>
        <h4>{original_language}</h4>
        <h1>{release_date}</h1>
      </div>
    </div>
  );
};

export default Card;

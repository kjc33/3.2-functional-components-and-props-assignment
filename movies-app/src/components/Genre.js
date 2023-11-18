import React from "react";
import Movie from "./Movie";

function Genre(props) {
  const { name, description, movieTitle1, movieTitle2 } = props;

  return (
    <div className="genre">
      <h2>{name}</h2>
      <p><strong>Description:</strong> {description}</p>
      <Movie title={movieTitle1} year={2022} />
      <Movie title={movieTitle2} year={2023} />
    </div>
  );
}

export default Genre;

import React from "react";
import Movie from "./Movie";

function Genre({ name, description, movieTitle1, movieTitle2, releaseYear1, releaseYear2 }) {
  return (
    <div className="genre flex flex-column small-gap">
      <div className="description">
        <h2>{name}</h2>
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className="movie-examples">
        <h3>Examples:</h3>
        <Movie title={movieTitle1} year={releaseYear1} />
        <Movie title={movieTitle2} year={releaseYear2} />
      </div>
    </div>
  );
}

export default Genre;

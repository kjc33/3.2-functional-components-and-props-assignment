import React from "react";

function Movie(props) {
  const { title, year } = props;
  const movieTitle = title ? title.name : "Unknown Title";

  return (
    <div className="movie-title-and-year">
      <p><i>{movieTitle} ({year})</i></p>
    </div>
  );
}

export default Movie;

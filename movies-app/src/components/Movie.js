import React from "react";

function Movie({ title, year }) {

  return (
    <p><i>{title},</i> {year}</p>
  );
}

export default Movie;

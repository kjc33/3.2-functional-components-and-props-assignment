import React from "react";
import Genre from "./Genre";
import Movie from "./Movie";

function Container({ siteTitle }) {
  return (
    <main>
      <h1>{siteTitle}</h1>
      <Genre name="Comedy" description="Movies that make you laugh." movieTitle1="Dumb and Dumber" movieTitle2="Forgetting Sarah Marshall" />
      <Genre name="Romance" description="Movies about love." movieTitle1="The Notebook" movieTitle2="Love Actually" />
    </main>
  );
}

export default Container;

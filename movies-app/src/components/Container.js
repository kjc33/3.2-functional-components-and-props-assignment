import React from "react";
import Genre from "./Genre";

function Container({ siteTitle }) {
  return (
    <main>
      <section className="movies flex flex-justify-center flex-align-center">
        <div className="inner-container flex flex-column medium-gap">
          <h1>{siteTitle}</h1>
          <Genre name="Comedy" description="Movies that make one laugh uncontrollably until the eyes begin to fill with tears of joy." movieTitle1="Dumb and Dumber" releaseYear1={1994} movieTitle2="Forgetting Sarah Marshall" releaseYear2={2008} />
          <hr />
          <Genre name="Romance" description="Movies centered around love, passion, courtship, and other emotions that tug at one's heart strings." movieTitle1="The Notebook" releaseYear1={2004} movieTitle2="Love Actually" releaseYear2={2003} />
        </div>
      </section>
    </main>
  );
}

export default Container;

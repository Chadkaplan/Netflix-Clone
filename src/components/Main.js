import React from "react";
import movieData from "../data/movies.json";
import Movie from "./Movie";

export default function Main() {
  return (
    <section>
      {movieData.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
      ;
    </section>
  );
}

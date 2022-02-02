import React from "react";
import movieData from "../../data/movies.json";
import "./main.css";
import Movie from "../Movie/Movie";
export default function Main() {
  let uniqueGenreArray = [];
  movieData.forEach((movie) => {
    if (
      !uniqueGenreArray.some((genre) => genre === movie.genre.split("|")[0])
    ) {
      uniqueGenreArray.push(movie.genre.split("|")[0]);
      let moviesByGenre = {};
      // bracket notation
    }
  });
  return (
    <div className="center">
      {uniqueGenreArray}
      <Movie />
    </div>
  );
}

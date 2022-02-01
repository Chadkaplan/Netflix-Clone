import React from "react";
import movieData from "../../data/movies.json";
import "./main.css";
import Movie from "../Movie/Movie";

// uniqueGenre.some((genre) => genre === movie.genre)

export default function Main() {
  let uniqueGenreArray = [];
  movieData.forEach((movie) => {
    if (!uniqueGenreArray.some((genre) => genre === movie.genre)) {
      uniqueGenreArray.push(movie.genre);
    }
  });
  console.log(uniqueGenreArray);
  return (
<Movie/>
  );
}

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
      // bracket notation
    }
  });
  let emptyObj = {};
  uniqueGenreArray.forEach((uniqueGenre) => {
    // fix movieData[0]. to be movies that belong to the category
    emptyObj[uniqueGenre] = movieData[0].title;
  });
  console.log(emptyObj);
  return (
    <div className="center">
      {uniqueGenreArray}
      <Movie />
    </div>
  );
}

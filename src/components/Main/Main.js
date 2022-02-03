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
    }
  });
  let sortedGenreMovies = {};
  uniqueGenreArray.forEach((uniqueGenre) => {
    let alikeGenreMovies = [];
    movieData.forEach((movie) => {
      if (movie.genre === uniqueGenre) {
        alikeGenreMovies.push(movie.title);
        sortedGenreMovies[uniqueGenre] = alikeGenreMovies;
      }
    });
  });
  return (
    <div className="main">
      {Object.keys(sortedGenreMovies).map((key) => (
        <div key={key}>
          <h3>{key}</h3>
          <Movie title={sortedGenreMovies[key].map((movie) =>(
  <p key={movie}>{movie}</p>
))}/>
        </div>
      ))}
      {/* <Movie /> */}
    </div>
  );
}
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
  // {Genre1: [{movie1}, {movie2},
  // Genre2: [{movie1}{movie2}{movie3}]
  // ]}
  let sortedGenreMovies = {};
  uniqueGenreArray.forEach((uniqueGenre) => {
    let alikeGenreMovies = [];
    movieData.forEach((movie) => {
      if (movie.genre === uniqueGenre) {
        alikeGenreMovies.push(movie);
        sortedGenreMovies[uniqueGenre] = alikeGenreMovies;
      }
    });
  });
  return (
    <div className="main">
      {Object.keys(sortedGenreMovies).map((genre) => (
        <div key={genre}>
          {/* Each genre */}
          <h1>{genre}</h1>
          {console.log(Object.values(sortedGenreMovies[genre])[0].image)}
          <div>{Object.values(sortedGenreMovies[genre].map((movie) => (
            <img className="movie--icon" src={movie.image}></img>
          )))}</div>
        </div>
      ))}
      {/* <Movie /> */}
    </div>
  );
}

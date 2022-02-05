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
  movieData.forEach((movie) => {
    // First we get the movie genre
    const movieGenre = movie.genre.split("|")[0];
    // Now lets get the current value for this genre.
    // It might be undefined if this is a new genre, or it might be an array
    // Since we need an array, we can use || to assign an empty array if its undefined
    let currentMoviesForGenre = sortedGenreMovies[movieGenre] || [];
    // Now we can push our movie into the array
    currentMoviesForGenre.push(movie);
    // And finally set this array as the value for the genre
    sortedGenreMovies[movieGenre] = currentMoviesForGenre;
  });
  return (
    <div className="main">
      {Object.keys(sortedGenreMovies).map((genre) => (
        <div className="main__label--reset" key={genre}>
          {/* Each genre */}
          <h1>{genre}</h1>
          {Object.values(
            sortedGenreMovies[genre].map((movie) => (
              <img
                key={movie.id}
                className="movie--icon"
                src={movie.image}
                alt={movie.title}
              ></img>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

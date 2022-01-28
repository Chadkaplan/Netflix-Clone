import React from "react";
import movieData from "../../data/movies.json";
import "./main.css";

export default function Main() {
  const uniqueGenre = [];
  movieData.map((movie) => {
    if (uniqueGenre.indexOf(movie.genre) === -1) {
      uniqueGenre.push(movie.genre);
    }
  });
  console.log(uniqueGenre);
  return (
    <div>
      {movieData.map((movie) => (
        <div className="movie--icon" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}

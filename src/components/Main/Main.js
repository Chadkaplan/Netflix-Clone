import React from "react";
import movieData from "../../data/movies.json";
import "./main.css";

export default function Main() {
  return (
    <section className="movie-row">
      <label className="label-title">Drama</label>
      <br></br>
      {movieData.map((movie) => {
        return (
          <div className="movie-icon" key={movie.id}>
            <img src={movie.image}></img>
          </div>
        );
      })}
    </section>
  );
}

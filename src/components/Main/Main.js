import React from "react";
import movieData from "../../data/movies.json";
import "./main.css";

export default function Main() {
  return (
    <section className="row">
      <label className="label--title row">Drama</label>
      <br />
      {movieData.map((movie) => (
        <div className="movie--icon" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </section>
  );
}

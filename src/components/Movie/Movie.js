import React from 'react';
import movieData from "../../data/movies.json";
import "./movie.css";

export default function Movie() {
    return (
        <div className="row">
          {movieData.map((movie) => (
            <div key={movie.id}>
              <img className="movie--icon" src={movie.image} alt={movie.title} />
            </div>
          ))}
        </div>
      );
}

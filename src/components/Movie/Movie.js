import React from "react";
import "./movie.css";

export default function Movie(props) {
  return (
    <div>
      <img className="movie--icon" src={props.img} alt={props.title} />
    </div>
  );
}

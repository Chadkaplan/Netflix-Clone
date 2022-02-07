// No need to import React
import "./movie.css";

export default function Movie(props) {
  return (
    <div>
      {/* Fix class name to be more consistent */}
      <img className="Movie__icon" src={props.img} alt={props.title} />
    </div>
  );
}

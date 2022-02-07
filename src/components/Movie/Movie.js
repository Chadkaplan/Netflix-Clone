import "./movie.css";

export default function Movie(props) {
  return (
    <div>
      <img className="Movie__icon" src={props.img} alt={props.title} />
    </div>
  );
}

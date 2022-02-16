import "./movie.css";

// Lets start destructuring props
export default function Movie({ img, title }) {
  return (
    <div>
      <img className="Movie__icon" src={img} alt={title} />
    </div>
  );
}

import "./main.css";
import Movie from "../Movie/Movie";
import {useMemo} from "react"
// Lets start destructuring props
export default function Main({ data }) {
  console.log("Props: ", data);
  const memoGenreArray = useMemo(() => {
    let uniqueGenreArray =[]
    data.forEach((movie) => {
      if (
        !uniqueGenreArray.some((genre) => genre === movie.Genre.split(",")[0])
      ) {
        uniqueGenreArray.push(movie.Genre.split(",")[0]);
      }
    })
  })
  // This will run on every render of the Main component
  // That's not a problem right now since it only receives a single prop of data
  // and when that data changes, we do need to re-render. But we should use this
  // as a chance to learn about memoization. Change this implementation to use
  // useMemo. To get you started, it will look like this:
  // const uniqueGenreArray= useMemo(() => {
  // ... your code to compute uniqueGenreArray
  // });  
  // Same thing here about using a useMemo
  // const sortedGenreMovies = useMemo(() => {
  // ... your code to compute sortedGenreMovies
  // })
  let sortedGenreMovies = {};
  data.forEach((movie) => {
    // First we get the movie genre
    const movieGenre = movie.Genre.split(",")[0];
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
    <div className="Main">
      {Object.keys(sortedGenreMovies).map((genre) => (
        <div key={genre}>
          {/* Each genre */}
          <h1 className="Main__label-title--row">{genre}</h1>
          <div className="Main__label-movie--row">
            {/* Each movie */}
            {Object.values(
              sortedGenreMovies[genre].map((movie) => (
                <Movie key={movie.imdbID} img={movie.Poster} title={movie.Title} />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

const API_KEY = process.env.REACT_APP_API_KEY;
let API_URL = "the+a";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  const asyncAPI = () => {
    try {
      let fetchAPI = async (pages) => {
        // 10 movies per query to get ID's
        let paginatedResponse = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}&page=${pages}`
        );
        paginatedResponse = paginatedResponse.json();
        let moviesToQuery = paginatedResponse.Search;
        let eachMovie;
        // Get each movie's full object individually
        let individualMovies = await Promise.all(
          (eachMovie = await moviesToQuery.map((movie) => {
            fetch(
              `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
            );
            eachMovie = eachMovie.json();
          }))
        );
        // Update the state to add each individual movie
        return (individualMovies = setMoviesList((currentValues) => [
          ...currentValues,
          ...values,
        ]));
      };
      for (let pages = 0; pages < 4; pages++) {
        fetchAPI(pages);
      }
    } catch (error) {
      console.log(error);
    }
    // Iterate over this many pages of 10
  };
  useEffect(() => {
    asyncAPI();
  }, []);

  console.log("Render App");
  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;

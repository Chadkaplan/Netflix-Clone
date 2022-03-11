import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

const API_KEY = process.env.REACT_APP_API_KEY;
let API_URL = "the+a";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  let fetchAPI = async (pages) => {
    // 10 movies per query to get ID's
    let paginatedResponse = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}&page=${pages}`
    );
    console.log(paginatedResponse);
    paginatedResponse = await paginatedResponse.json();
    let moviesToQuery = paginatedResponse.Search;
    let eachMovie;
    eachMovie = await Promise.all(
      moviesToQuery.map((movie) => {
        return fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
        ).then((res) => res.json());
      })
    ).then((values) =>
      setMoviesList((currentValues) => [...currentValues, ...values])
    );
  };
  useEffect(() => {
    for (let pages = 0; pages < 6; pages++) {
      fetchAPI(pages);
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;

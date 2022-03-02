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
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}`
    );
    paginatedResponse = await paginatedResponse.json();
    let moviesToQuery = paginatedResponse.Search;
    let eachMovie = Promise.all(
      moviesToQuery.map(async (movie) => {
        return (eachMovie = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
        ));
      })
    );
    await console.log(moviesToQuery);
    // eachMovie = await eachMovie.json();
    // setMoviesList(eachMovie);
  };
  console.log("API working?", moviesList);

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log("Render App");
  return (
    <div className="App">
      <Navbar />
      {/* <Main data={moviesList} /> */}
    </div>
  );
}

export default App;

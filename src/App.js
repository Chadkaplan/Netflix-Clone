import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
let API_URL = "the+a";
let searchParam = "s";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesToQuery, setMoviesToQuery] = useState([]);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}`)
      .then((res) => res.json())
      .then((result) => setMoviesToQuery(result.Search))
      .catch(function (error) {
        console.log("Requestfailed", error);
      });
  }, []);

  useEffect(() => {
    Promise.all(
      moviesToQuery.map((movie) => {
        return fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
        )
        .then((res) => res.json())
      })
    )
      .then((values) => setMoviesList(values))
      .catch(function (error) {
        console.log("Requestfailed", error);
      });
  }, [moviesToQuery]);
  // console.log("To Query: ",moviesToQuery)
  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;

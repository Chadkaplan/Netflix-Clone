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
  let imdbID;
//   Promise.all(urls.map(url =>
//     fetch(url).then(resp => resp.text())
// )).then(texts => {
//     …
// })
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}`)
      .then((res) => res.json())
      .then((result) => setMoviesToQuery(result.Search))
      .catch(function (error) {
        console.log("Requestfailed", error);
      });
  }, []);
  useEffect(() => {
    // Promise.all(Object.values(moviesToQuery.map()))
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${[moviesToQuery]}`)
      .then((res) => res.json())
      .then((result) => setMoviesList(result)),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      };
  }, []);
  // console.log("Movies to Query: ", moviesToQuery);
  // console.log("Movies List: ", moviesList);
  console.log("IMDB values: ", moviesToQuery.forEach(movie => {
    console.log(Object.values(movie)[2])
  }));
  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;

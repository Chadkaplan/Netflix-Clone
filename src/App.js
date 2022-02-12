import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
let API_URL = "the+a";
let searchParam = "s";

function App() {
  const [moviesList, setMoviesList] = useState([{Poster: "https://m.media-amazon.com/images/M/MV5BZThjMmQ5YjktMTUyMC00MjljLWJmMTAtOWIzNDIzY2VhNzQ0XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg",
  Title: "The Perks of Being a Wallflower",
  Type: "movie",
  Year: "2012",
  imdbID: "tt1659337"}]);
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
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie.imdbID}`);
      })
    )
      .then((values) => console.log("Values: ", values))
      .catch(function (error) {
        console.log("Requestfailed", error);
      });
  }, []);
  // console.log("To Query: ",moviesToQuery)
  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;

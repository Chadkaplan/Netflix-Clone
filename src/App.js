import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
let API_URL = "the+a";

function App() {
  const [moviesList, setmoviesList] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setmoviesList(result.Search);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;

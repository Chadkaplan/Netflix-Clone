import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

const API_KEY = process.env.REACT_APP_API_KEY;
let API_URL = "the+a";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  /**
  * Lets make some changes here. We only need moviesToQuery so that we can make our next request
  * moviesToQuery has no value on its own. Also, the useEffect that actually requests the individual movies runs
  * on the next render after we have the moviesToQuery, this is essentially a wasted render since we wont have
  * anything new to show. So lets combine them.
  * This implementation is fine, but has a bunch of nested callbacks and is overall pretty ugly and hard to follow
  * A better choice will be to leverage async / await, but to do that, we will need to move these functions outside of the component
  * Once you have this implementation working and make sense, we'll refactor these to be separate async functions
  **/
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}`)
      .then((res) => res.json())
      .then((result) => {
        const moviesToQuery = result.Search;
        Promise.all(
          moviesToQuery.map((movie) => {
            return fetch(
              `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
            )
            .then((res) => res.json())
          })
        )
          .then((values) => setMoviesList(values))
          .catch((error) => {
            console.log("Requestfailed", error);
          });
      })
      .catch((error) => {
        console.log("Requestfailed", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;

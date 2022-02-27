import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

const API_KEY = process.env.REACT_APP_API_KEY;
let API_URL = "the+a";
let page = 1

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

  //   {
  //     let result;
  //     let promises = [];
  //     for(let i = 0; i < user_list.length; i++){
  //         promises.push(make_api_call(user_list[i].Id));
  //     }
  //     result = await Promise.all(promises);
  //     for(let i = 0; i < user_list.length; i++){
  //         user_list[i]['result'] = result[i];
  //     }
  //     return user_list;
  // }

    let result;
    let promises =[];
    // Fetch multiple movie ID's for individual search
    for (let i = 0; i < 3; i++) {

      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${API_URL}&page=${i}`)
      .then((res) => res.json())
      .then(promises.push(result))
      .then((result) => {
        const moviesToQuery = result.Search;
        Promise.all(
          moviesToQuery.map((movie) => {
            // Fetch each individual movie object
            return fetch(
              `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
              )
              .then((res) => res.json())
            })
            )
            .then((values) => setMoviesList(values))
            .catch((error) => {
              console.log("Request failed", error);
            });
          })
          .catch((error) => {
            console.log("Request failed", error);
          });
        }
  }, []);
console.log("Render App")
console.log("Multiple API Result: ", resul)
  return (
    <div className="App">
      <Navbar />
      <Main data={moviesList} />
    </div>
  );
}

export default App;
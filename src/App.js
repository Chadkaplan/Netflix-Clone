import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&t=Crazy+stupid+love`)
  .then(res => {
    const movie = res.data;
    console.log(movie);
  })
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;

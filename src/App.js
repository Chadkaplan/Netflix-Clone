import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
let API_URL = "Crazy+stupid+love"

function App() {
  axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${API_URL}`)
  .then(res => {
    const movie = res.data;
    console.log(movie);
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
  }})
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;

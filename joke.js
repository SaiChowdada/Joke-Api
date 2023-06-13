/** @format */

import React from "react";

import useFetch from "./hooks";
import "./Joke.css";

const Joke = () => {
  const joke = useFetch(
    "https://official-joke-api.appspot.com/random_joke",
    {}
  );
  //fetch('https://official-joke-api.appspot.com/random_joke')
  const jokesList = [];

  

  const { setup, punchline } = joke;
  return (
    <div className="bg-container">
      <h1>Joke of the session</h1>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
};

export default Joke;

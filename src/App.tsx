import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./Form"
import ShowMovie from "./ShowMovie"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [Text, setText] = useState<string>("")

    return (
    <div className="App">
      <Form Text={Text} setText={setText} setMovies={setMovies} />
      <ShowMovie movies={movies} />
    </div>
  );

}

export default App;

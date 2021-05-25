import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./Form"
import Movie from "./Movie"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [Text, setText] = useState<string>("")

    return (
    <div>
      <Form Text={Text} setText={setText} setMovies={setMovies} />
      <Movie movies={movies}/>
    </div>
  );

}

export default App;

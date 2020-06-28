import React from 'react';
import './App.css';
import Pokemon from "./Pokemon";

function App() {
  // const {info, error, getInfo} = props;
  // {info && isFetching ? <h2>Let's catch them all!</h2> : <h2>There's no Pokemon!</h2>}
  return (
    <div className="App">
    <h1>List of Pokemon:</h1>
    <Pokemon />
    </div>
  );
}

export default App;

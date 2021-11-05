import { useState, useEffect } from 'react';

import Random from "./components/RandomCharacter"
import './App.css';

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => setCharacters(...characters, response))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Random characters={characters}/>
    </div>
  );
}

export default App;

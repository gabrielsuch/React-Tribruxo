import { useState, useEffect } from 'react';

import Random from "./components/RandomCharacter"
import Loading from "./components/Loading"
import './App.css';

function App() {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  console.log(isLoading)

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => {
      setCharacters(...characters, response)
      setIsLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      {
        isLoading ? <Loading/>
        : 
        <Random characters={characters}/>
      }
    </div>
  );
}

export default App;

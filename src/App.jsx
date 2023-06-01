import { useState } from 'react';
import Cards from './components/Card/Cards';
import NavBar from './components/NavBar/NavBar';
import "./styles/App.module.css"
import axios from "axios"
function App() {
  const [characters, setCharacters] = useState([])
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((({ data }) => {
      if (data.name) {
        setCharacters((prev) => [...prev, data])
      } else {
        alert("No hay personajes con este id")
      }
    }))
  }
  function onClose(id) {
    let diff = characters.filter(character => character.id !== parseInt(id))
    setCharacters(diff)
  }

  return (
    < >
      <NavBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose}
      />
    </>
  );
}

export default App;

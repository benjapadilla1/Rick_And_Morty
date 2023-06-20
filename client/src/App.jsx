import { useState } from 'react';
import Cards from './components/Card/Cards';
import NavBar from './components/NavBar/NavBar';
import "./styles/App.module.css"
import axios from "axios"
function App() {
  const [characters, setCharacters] = useState([])
  function onSearch(id) {
    axios(`http://127.0.0.1:5174/rickandmorty/character/${id}`).then((({ data }) => {
      if (data.name) {
        const repeat = characters.find((character => character.id === data.id))
        if (repeat) {
          alert("Este personaje ya se buscó")
        }
        else {
          setCharacters((prev) => [...prev, data])
        }
      } else {
        alert("No hay personajes con este id")
      }
    }))
  }
  function onClose(id) {
    let diff = characters.filter(character => character.id != parseInt(id))
    setCharacters(diff)
    console.log(characters)
  }

  return (
    <>
      <NavBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </>
  );
}

export default App;

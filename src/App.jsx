import Cards from './components/Card/Cards';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data/data.js';
import styles from "./styles/App.module.css"
function App() {
  function searchHandler() {
    window.alert("El ID que estoy buscando")
  }
  function closeHandler() {
    window.alert('Emulamos que se cierra la card')
  }

  return (
    <div className={styles.backgroundImage} >
      <h1 className={styles.title} >RICK AND MORTY</h1>
      <SearchBar onSearch={searchHandler} />
      <Cards characters={characters} onClose={closeHandler}
      />
    </div>
  );
}

export default App;

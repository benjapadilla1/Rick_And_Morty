import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")
   function handleChange(e) {
      setId(e.target.value)
   }
   function handleClick() {
      onSearch(id)
      setId("")
   }
   function handleRandomClick() {
      const randomId = Math.floor(Math.random() * 826) + 1
      onSearch(randomId)
   }
   return (
      <div className={styles.searchDiv}>
         <input type='search' className={styles.searchBar} placeholder="Ingrese el personaje a buscar" value={id} onChange={handleChange} />
         <button className={styles.searchButton} onClick={handleClick}>
            <i className="fas fa-search"></i>
         </button>
         <button className={styles.randomButton} onClick={handleRandomClick}>
            Random
         </button>
      </div>
   );
}

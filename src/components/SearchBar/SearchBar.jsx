import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   const { onSearch } = props
   return (
      <div className={styles.searchDiv}>
         <input type='search' className={styles.searchBar} placeholder="Ingrese el personaje a buscar" />
         <button className={styles.searchButton} onClick={onSearch}>Agregar</button>
      </div>
   );
}

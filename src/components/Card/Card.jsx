import React from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom"
export default function Card(props) {
   const { character, onClose } = props
   return (
      <div className={styles.card}>
         <button onClick={() => onClose(character.id)} className={styles.button}>&times;</button>
         <Link to={`/detail/${character.id}`}>
            <h3 className={styles.name}>{character.name.toUpperCase()}</h3>
            <img className={styles.image} src={character.image} alt={character.name} />
         </Link>
         <p className={styles.cardInfo}>{character.status}</p>
         <p className={styles.cardInfo}>{character.species}</p>
         <p className={styles.cardInfo}>{character.gender}</p>
         <p className={styles.origin}>{character.origin.name}</p>
      </div>
   );
}
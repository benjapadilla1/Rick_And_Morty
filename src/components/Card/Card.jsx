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
         {/* HACER IF DE MUERTO O VIVO */}
         <div className={styles.status}>
            {character.status === "Dead" && (
               <i className="fas fa-skull-crossbones fa-2x"></i>
            )}
            {character.status === "unknown" && (
               <i className="fas fa-question fa-2x"></i>
            )}
            {character.status === "Alive" && (
               <i className="fas fa-heart fa-2x "></i>
            )}
         </div>
         <p className={styles.cardInfo}>{character.status}</p>
         <p className={styles.cardInfo}>{character.species}</p>
         <p className={styles.cardInfo}>{character.gender}</p>
         <p className={styles.origin}>{character.origin.name}</p>
      </div>
   );
}
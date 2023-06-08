import React from "react";
import { connect } from "react-redux"
import styles from "./Card.module.css"
import { Link } from "react-router-dom"
import { addFavorite, removeFavorite } from "../../redux/Actions";
import { useState } from "react";
import { useEffect } from "react";
function Card(props) {
   const [fav, setFav] = useState(false)
   const { character, onClose, addFavorite, removeFavorite, favorites } = props

   function handleFavorite(character) {
      if (!fav) {
         addFavorite(character)
         setFav(true)
      } else {
         removeFavorite(character)
         setFav(false)
      }
   }
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === fav.id) {
            setFav(true)
         }
      });
   }, [favorites])

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
         {fav ? (
            <button onClick={() => handleFavorite(character.id)}>💖</button>
         ) : (

            <button onClick={() => handleFavorite(character)}>❤</button>
         )}

      </div>
   );
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}
const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
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
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true)
         }
      });
   }, [favorites, character.id])
   function handleFavorite(character) {
      if (!fav) {
         addFavorite(character)
         setFav(true)
      } else {
         removeFavorite(character.id)
         setFav(false)
      }
   }
   return (
      <div className={styles.card}>
         <button onClick={() => onClose(character.id)} className={styles.button}>&times;</button>
         <Link to={`/detail/${character.id}`}>
            <h3 className={styles.name}>{character.name.toUpperCase()}</h3>
            <img className={styles.image} src={character.image} alt={character.name} />
         </Link>
         {/* MUERTO O VIVO */}
         <div className={styles.cardSymbol}>
            {character.status === "Dead" && <i className="fas fa-skull-crossbones fa-2x"></i>}
            {character.status === "unknown" && <i className="fas fa-question fa-2x"></i>}
            {character.status === "Alive" && <i className="fas fa-heart fa-2x"></i>}
            {character.gender === "Male" && <i className="fas fa-solid fa-mars fa-2x"></i>}
            {character.gender === "Genderless" && <i className="fas fa-question fa-2x"></i>}
            {character.gender === "Female" && <i className="fas fa-sharp fa-venus fa-2x"></i>}
         </div>
         {/* <p className={styles.cardInfo}>{character.status}</p> */}
         {/* <p className={styles.cardInfo}>{character.species}</p> */}
         {/* <p className={styles.cardInfo}>{character.gender}</p> */}
         {/* <p className={styles.origin}>{character.origin.name}</p> */}
         <div>
            {fav ? (
               <span onClick={() => handleFavorite(character.id)}>
                  <i className="fas fa-star fa-lg" style={{ color: "yellow" }} ></i>
               </span>
            ) : (
               <span onClick={() => handleFavorite(character)}>
                  <i className="fas fa-star fa-lg"></i>
               </span>
            )}
         </div>

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
      favorites: state.allCharacters
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
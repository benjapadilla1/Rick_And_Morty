import Card from "./Card"
import styles from "./Card.module.css"
export default function Cards(props) {
   const { characters, onClose } = props
   return (
      <div className={styles.divCard}>
         {characters?.map((character) => (
            <Card
               key={character.id}
               character={character}
               onClose={onClose}
            />
         ))}
      </div>
   )
}

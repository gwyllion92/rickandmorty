import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addFavorite, deleteFav } from "../../redux/actions";

function Card({ name, species, gender, image, onClose, id }) {
   const dispatch = useDispatch()
   const [ isFav, setIsFav ] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(deleteFav(id))
      }
      else{
         setIsFav(true)
         dispatch(addFavorite({ name, species, gender, image, onClose, id }))
      }
   }

   return (
      <div className={styles.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button className={styles.deleteBotton} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h1 className={styles.title} >{name}</h1>
         </Link>
         <h2 className={styles.title} >{species}</h2>
         <h2 className={styles.title} >{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}

export default Card;
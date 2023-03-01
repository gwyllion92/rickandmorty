import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({name, species, gender, image, onClose, id}) {
   return (
      <div className={styles.container}>
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
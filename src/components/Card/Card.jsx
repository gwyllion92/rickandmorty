import styles from "./Card.module.css";

function Card({name, species, gender, image, onClose}) {
   return (
      <div className={styles.container}>
         <button className={styles.deleteBotton} onClick={onClose}>X</button>
         <h2 className={styles.title} >{name}</h2>
         <h2 className={styles.title} >{species}</h2>
         <h2 className={styles.title} >{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}

export default Card;
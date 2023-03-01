import styles from './About.module.css';


const About = () => {
    return (
        <div className={styles.abouting}>
            <h1 className={styles.title}>Esta es mi primera App</h1>
            <h2 className={styles.title}>Desarrolada por Gabriel Lesta</h2>
            <h3>Gracias a lo aprendido en 'Soy Henry!' he podido hacer está SPA</h3>
            <p>Estudié algo de programación pero muy poco hace muchos años, nunca hice un bootcamp del nivel de Henry</p>
        </div>
    )   
}

export default About;
import { useState } from "react"
import validation from "./validation";
import styles from './Form.module.css'

const Form = ({ login }) => {
    const [userData, setUserData] = useState({ 
        username: '', 
        password: ''
    });

    const [errors, setErrors] = useState({ 
        username: '', 
        password: ''
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value 
            })
        )
    }

    const handleSubmit = (event ) => {
        login(userData)
    }

    return(
        <div>
         <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label className={styles.labels} htmlFor="username">Username: </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p className={styles.formError}>{errors.username}</p>}
            
            <label className={styles.labels} htmlFor="password">Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            {errors.password && <p className={styles.formError}>{errors.password}</p>}

            <button className={styles.formBotton}>LOGIN</button>
         </form>
        </div>
    )
}

export default Form
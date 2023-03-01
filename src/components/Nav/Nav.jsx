import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = ({onSearch}) => {
    return(
        <nav>
            <Link className={styles.vinculo} to='/about' >About</Link>
            <Link className={styles.vinculo} to='/home' >Home</Link>
            <Link className={styles.vinculo} to='/' >Logout</Link>
            <br/>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav
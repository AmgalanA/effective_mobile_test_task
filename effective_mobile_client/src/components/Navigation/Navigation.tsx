import { useNavigate } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
    const navigate = useNavigate()

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li onClick={() => navigate('/')} className={`${styles.listItem} rounded-tl-lg`}>Create User</li>

            <li onClick={() => navigate('/history')} className={`${styles.listItem} rounded-tr-lg`}>History</li>
        </ul>
    </nav>
  )
}

export default Navigation
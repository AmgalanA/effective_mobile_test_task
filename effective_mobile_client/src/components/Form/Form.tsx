import { useState} from 'react';

import styles from './Form.module.scss'
import { UserService } from '../../api/user/user.service';

const Form = () => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    try {
      const payload = { email }

      const response = await UserService.createUser(payload);

      setMessage('User ID: ' + response.id)
      
    } catch (error) {
      
      setError(`Email already exists`)
    }
    setEmail('')
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h1 className={styles.heading}>Create User</h1>

      <input 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        className={styles.input} 
        type="email" 
        placeholder='Email...' 
      />

      {error && (
        <span 
          onClick={() => setError('')} 
          className={styles.error}
        >
          {error}
        </span>
      )}

      {message && (
        <span className={styles.message}>
          {message}
        </span>
      )}

      <button 
        disabled={!email} 
        className={styles.button} 
        type='submit'
      >
        Create User
      </button>  
    </form>
  )
}

export default Form
const userQueries = { 
    GET_USERS : 'SELECT * FROM users',
    GET_USERS_BY_ID: 'SELECT * FROM users WHERE id = $1',
    GET_USER_BY_EMAIL: 'SELECT * FROM users WHERE email = $1',
    CREATE_USER: 'INSERT INTO users (email) VALUES ($1) RETURNING *',
    UPDATE_USER: 'UPDATE users SET email = $1 where id = $2 RETURNING *'
 }

module.exports = userQueries;
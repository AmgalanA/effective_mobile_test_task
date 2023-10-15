const storyQueries = {
    CREATE_USER: 'INSERT INTO activities (user_id, type, time) VALUES ($1, $2, $3)',
    UPDATE_USER: 'INSERT INTO activities (user_id, type, time) VALUES ($1, $2, $3) RETURNING *',
    GET_ACTIVITIES: 'SELECT * FROM activities WHERE user_id = $1 ORDER BY id'
}

module.exports = storyQueries;
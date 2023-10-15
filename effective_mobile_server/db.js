const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'effectivemobiletesttask',
    password: 'amgalan',
    port: 5432,
})

module.exports = pool
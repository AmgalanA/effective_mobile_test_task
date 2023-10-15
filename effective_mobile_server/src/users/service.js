const pool = require('../../db')
const userQueries = require('./queries/user-queries.js')

const UserService = {
    getUsers: () => {
        return pool.query(userQueries.GET_USERS)
    },
    getUsersById: (paramId) => {
        const id = parseInt(paramId)

        return pool.query(userQueries.GET_USERS_BY_ID, [id])
    },
    create: (req) => {
        const { email } = req.body;

        return pool.query(userQueries.CREATE_USER, [email])  
    },

    getByEmail: async (email) => {
        return pool.query(userQueries.GET_USER_BY_EMAIL, [email])
    },

    update: (req) => {
        const { email, id } = req.body;

        return pool.query(userQueries.UPDATE_USER, [email, id])
    }

}

module.exports = UserService;
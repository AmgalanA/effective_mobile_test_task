
const pool = require('../../db')
const storyQueries = require('./queries/story-queries');
const UserService = require('./service')
const types = require('./types')

const StoryService = {
    createUser: async (body) => {
        const user_response = await UserService.create(body)

        const time = new Date().getTime()

        await pool.query(storyQueries.CREATE_USER, [user_response.rows[0].id, types.CREATE, time])

        return user_response;
    },

    updateUser: async (req) => {
        const user_response = await UserService.update(req)
        const time = new Date().getTime()

        await pool.query(storyQueries.UPDATE_USER, [req.body.user_id, types.UPDATE, time])

        return user_response;
    },

    getActivities: async (userId) => {
        const response = await pool.query(storyQueries.GET_ACTIVITIES, [userId])

        return response;
    }
}

module.exports = StoryService;
const storyService = require('./story-service')
const userService = require('./service')

const UserController = {
    getUsers: async (req, res) => {
        const response = await userService.getUsers();

        res.status(200).json(response.rows)
    },
    
    getUsersById: async (req, res) => {
        const response = await userService.getUsersById(req.params.id)

        res.status(200).json(response.rows)
    },

    create: async (req, res) => {
        const isEmailExists = await userService.getByEmail(req.body.email);

        if (isEmailExists.rows != 0) {
            res.status(400).json('Email already exists')
        }

        const response = await storyService.createUser(req)

        res.status(200).json(response.rows[0])
    },

    update: async (req, res) => {
        const response = await storyService.updateUser(req)

        res.status(200).json(response.rows)
    },

    getActivities: async (req, res) => {
        const { userId } = req.params

        const response = await storyService.getActivities(userId)

        res.status(200).json(response.rows)
    }
}


module.exports = UserController
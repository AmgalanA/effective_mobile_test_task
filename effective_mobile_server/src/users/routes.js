const { Router } = require('express')
const userController = require('./controller')

const router = new Router();

router.get('/', userController.getUsers)
router.get('/activities/:userId', userController.getActivities)
router.get('/get-one/:id', userController.getUsersById)
router.post('/', userController.create)
router.put('/', userController.update)

module.exports = router
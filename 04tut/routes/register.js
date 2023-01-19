const express = require('express')
const router = express.Router()
const registerController = require('../controllers/registerController')
const { route } = require('./root')

router.post('/', registerController.handleNewUser)

module.exports = router
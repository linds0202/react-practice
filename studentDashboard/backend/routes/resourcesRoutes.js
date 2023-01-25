const express = require('express')
const router = express.Router()
const resourcesController = require('../controllers/resourcesController')

router.route('/')
    .get(resourcesController.getAllResources)
    .post(resourcesController.createNewResource)
    .patch(resourcesController.updateResource)
    .delete(resourcesController.deleteResource)

module.exports = router
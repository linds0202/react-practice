const express = require('express')
const router = express.Router()
const path = require('path')

//  '^/$|/index.html' must begin with / and end with / OR index.html or without the .html
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router
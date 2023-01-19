const express = require('express')
const router = express.Router()
const path = require('path')

//  '^/$|/index.html' must begin with / and end with / OR index.html or without the .html
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'))
})

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, 'new-page.html') //sends 302 code by default
})

module.exports = router
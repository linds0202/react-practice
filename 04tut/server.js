const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500

//  '^/$|/index.html' must begin with / and end with / OR index.html or without the .html
app.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname })
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, 'new-page.html') //sends 302 code by default
})

//Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('Attempted to load hello.html')
    next()
}, (req, res) => {
    res.send('hello world')
})

//Chaining route handlers
const one = (req, res, next) => {
    console.log('One')
    next()
}

const two = (req, res, next) => {
    console.log('Two')
    next()
}

const three = (req, res) => {
    console.log('Three')
    res.send('Finished!')
}

app.get('/chain(.html)?', [one, two, three])


app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

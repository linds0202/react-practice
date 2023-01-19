const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500

//custom middleware logger
app.use(logger)

//Cross origin resource sharing
const whitelist = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3500']
const corsOptions = { 
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

//built in middleware to handle url encoded data - form data
///content-type: application/x-www--form-urlencoded
app.use(express.urlencoded({ extended: false }))

//built in middleware for json
app.use(express.json())

//serve static files (css & imgs) to root and subdir
app.use(express.static(path.join(__dirname, '/public')))
app.use('/subdir', express.static(path.join(__dirname, '/public')))

//route for root & subdirectory
app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ error: '404 not found' })
    } else {
        res.type('txt').send('404 not found')
    }
})

//
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

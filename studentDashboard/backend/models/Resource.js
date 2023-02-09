const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Resource', resourceSchema)
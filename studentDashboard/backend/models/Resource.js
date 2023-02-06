const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema(
    {
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
        tags: {
            type: [String],
            default: ['Online]'
        },
    }
)

module.exports = mongoose.model('Resource', resourceSchema)
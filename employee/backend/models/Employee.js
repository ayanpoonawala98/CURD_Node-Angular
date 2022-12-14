const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Employee',employeeSchema)
const mongoose = require('mongoose')

const loginmodule = mongoose.Schema({
    name:
    {
        type: String,
        required: [true, "please enter name"],
        maxlength: 12,
        minlength: 5
    },
    password:
    {
        type: String,
        required: [true, "please enter password"],
        maxlength: 10
    }
}, { timestamps: true })

const login = mongoose.model("login", loginmodule)
module.exports = login
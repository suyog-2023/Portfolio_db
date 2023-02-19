const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength:2
    },
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Id")
            }
        }
    },
    phone: {
        type: String,
        require: true,
        min:10
    },
    message: {
        type: String,
        require: true,
        minLength:10
    },
    date: {
        type: Date,
        default:Date.now
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;
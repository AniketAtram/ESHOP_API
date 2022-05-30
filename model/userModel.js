const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './../config/config.env'
});
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'field cannot be empty'],
        minLength: [3, 'minimum 3 characters required'],
        maxLength: [30, 'max 50 characters allowed'],
    },
    lastName: {
        type: String,
        required: [true, 'field cannot be empty'],
        minLength: [3, 'minimum 3 characters required'],
        maxLength: [30, 'maximum of 50 characters allowed']
    },
    email: {
        type: String,
        required: [true, 'field cannot be empty'],
        unique: [true, 'email already exists, please try a different email'],
        minLength: [5, 'minimum length is 5'],
        maxLength: [100, 'maximum length allowed is 100'],
    },
    contactNumber: {
        type: Number,
        required: [true, 'field cannot be empty'],
        min: [1000000000, 'minimum digits is 10 got {VALUE}'],
        max: [9999999999, 'maximum digits allowed is 10 got {VALUE}'],

    },
    password: {
        type: String,
        required: [true, 'field cannot be empty'],
        minLength: [5, 'minimum length of password is 5'],
        maxLength: [60, 'password cannot be longer than 60 characters']
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    isAdmin: Boolean
});
const User = mongoose.model('User', userSchema);
module.exports = User;
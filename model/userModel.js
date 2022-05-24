const mongoose = require('mongoose');
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
        minLength: [5, 'minimum length is 5'],
        maxLength: [100, 'maximum length allowed is 100'],
        unique: [true, 'field cannot be empty']
    },
    contactNumber: {
        type: Number,
        required: [true, 'field cannot be empty'],
        min: [10, 'minimum digits is 10 got {VALUE}'],
        max: [10, 'maximum digits allowed is 10 got {VALUE}'],

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
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'field cannot be empty'],
        minlenght: 3,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: [true, 'field cannot be empty'],
        minlenght: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'field cannot be empty'],
        minlenght: 5,
        maxlength: 200,
        unique: [true, 'field cannot be empty']
    },
    contactNumber: {
        type: Number,
        required: [true, 'field cannot be empty'],
        minlenght: 10,
        maxlength: 10,

    },
    password: {
        type: String,
        required: [true, 'field cannot be empty'],
        minlenght: 5,
        maxlength: 60
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
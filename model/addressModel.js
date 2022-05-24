const mongoose = require('mongoose');
const addressSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty!'],
        minLength: [3, 'Must be minimum 3 characters long.'],
        trim: true
    },
    city: {
        type: String,
        required: [true, 'city cannot be empty!'],
        minLength: [3, 'Must be minimum 3 characters long.'],
        trim: true
    },
    state: {
        type: String,
        required: [true, 'state cannot be empty!'],
        minLength: [3, 'Must be minimum 3 characters long.'],
        trim: true
    },
    street: {
        type: String,
        required: [true, 'street cannot be empty!'],
        minLength: [3, 'Must be minimum 3 characters long.'],
        trim: true
    },
    contactNumber: {
        type: Number,
        required: [true, 'Contact is required'],
        min: [10, 'Number must contain atleast 10 digits'],
        mxn: [10, 'Number must contain atmost 10 digits'],
        trim: true
    },
    landmark: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
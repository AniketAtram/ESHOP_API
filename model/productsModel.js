const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'cannot be empty']
    },
    category: {
        type: String,
        required: [true, 'cannot be empty']
    },
    manufacturer: {
        type: String,
        required: [true, 'cannot be empty']
    },
    availableItems: {
        type: Number,
        required: [true, 'cannot be empty']
    },
    price: {
        type: Number,
        required: [true, 'cannot be empty']
    },
    imageURL: {
        type: String,
        required: [true, 'cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'cannot be empty']
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const Products = mongoose.model('Products', productsSchema);
module.exports = Products;
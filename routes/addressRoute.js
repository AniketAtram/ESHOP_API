const express = require('express');
const addressRouter = express.Router();
const addressController = require('./../controller/addressController');

addressRouter
    .route('/')
    .get(addressController.getAllAddress)
    .post(addressController.saveAddress)

module.exports = addressRouter;
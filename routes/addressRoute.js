const express = require('express');
const addressRouter = express.Router();

addressRouter
    .route('/')
    .get()
    .post()

module.exports = addressRouter;
const express = require('express');
const authRouter = express.Router();
const authController = require('./../controller/authController');
authRouter
    .route('/')
    .post(authController.authUser);

module.exports = authRouter;
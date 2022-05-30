const express = require('express');
const authRouter = express.Router();
const authController = require('./../controller/authController');
const middleware = require('./../middleware/customMiddlewares');
authRouter
    .route('/')
    .post(middleware.checkLoginCredentials, authController.authUser);

module.exports = authRouter;
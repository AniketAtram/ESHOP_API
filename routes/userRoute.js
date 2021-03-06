const express = require('express');
const userRouter = express.Router();
const userController = require('./../controller/userController');
const middleware = require('../middleware/customMiddlewares');
userRouter
    .route('/')
    .get(userController.getUser)
    .post(middleware.checkEmail, userController.addUser)


module.exports = userRouter;
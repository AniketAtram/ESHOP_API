const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));



const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');

// app.post('/user', userController.getUser);
app.use('/user', userRouter);
app.use('/auth', authRouter);

module.exports = app;
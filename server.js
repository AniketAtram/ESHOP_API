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

app.listen(3000, '127.0.0.1', () => {
    console.log("Server has started and is listening on port 3000")
});
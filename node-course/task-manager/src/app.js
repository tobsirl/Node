const express = require('express');

// controllers
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

// Routes
app.use('/users/', userRouter);
app.use('/tasks/', taskRouter);

module.exports = app;

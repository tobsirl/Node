const express = require('express');

// controllers
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

const multer = require('multer');
const upload = multer({
  dest: 'replays',
});

app.post('/replay', upload.single('replay'), (req, res) => {
  res.send();
});

// Routes
app.use('/users/', userRouter);
app.use('/tasks/', taskRouter);

module.exports = app;

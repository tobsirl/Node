const express = require('express');

// controllers
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

const multer = require('multer');
const upload = multer({
  dest: 'replays',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error(`Please upload a word document`));
    }

    cb(undefined, true);
  },
});

app.post(
  '/replay',
  upload.single('replay'),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// Routes
app.use('/users/', userRouter);
app.use('/tasks/', taskRouter);

module.exports = app;

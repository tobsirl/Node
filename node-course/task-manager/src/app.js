const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  newUser.save();

  res.status(201).json({
    status: 'sucess',
    data: {
      user: newUser,
    },
  });
});

app.post('/tasks', (req, res) => {
  const { description, completed } = req.body;

  const newTask = new Task({
    description,
    completed,
  });

  newTask
    .save()
    .then(() => res.send(newTask))
    .catch((err) => res.send(err.message));
});

module.exports = app;

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

app.get('/users', (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) return res.status(404).send(`No user found`);
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err.message));
});

app.post('/tasks', (req, res) => {
  const { description, completed } = req.body;

  const newTask = new Task({
    description,
    completed,
  });

  newTask
    .save()
    .then(() => res.status(201).send(newTask))
    .catch((err) => res.send(err.message));
});

module.exports = app;

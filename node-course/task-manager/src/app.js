const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();

app.use(express.json());

// user endpoints
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
      return res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err.message));
});

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

// task endpoints
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

app.get('/tasks', (req, res) => {
  Task.find()
    .then((tasks) => res.status(200).send(tasks))
    .catch((err) => res.status(500).send(err.message));
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .then((task) => {
      if (!task) {
        return res.status(404).send(`No task found`);
      }
      res.status(200).send(task);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;

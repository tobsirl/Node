const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();

app.use(express.json());

// user endpoints
app.get('/users', async (req, res) => {
  const users = await User.find();

  try {
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send(`User not found!`);
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
});

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
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

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

app.patch('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({
      status: 'failed',
      message: 'Invalid Updates',
    });
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      { new: true, runValidators: true }
    );

    if (!updateUser) {
      return res.status(404).json({
        status: 'failed',
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        updateUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error,
    });
  }
});

// task endpoints
app.post('/tasks', async (req, res) => {
  const { description, completed } = req.body;

  const newTask = new Task({
    description,
    completed,
  });

  try {
    await newTask.save(newTask);

    res.status(201).json({
      status: 'success',
      data: {
        user: newTask,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
});

app.get('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).send(`Task not found!`);
    }

    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
});

app.patch('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;

  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];

  const isAllowed = updates.every((update) => allowedUpdates.includes(update));

  if (!isAllowed) {
    return res.status(400).json({
      status: 'failed',
      message: 'Invalid Updates',
    });
  }

  try {
    const updateTask = await Task.findByIdAndUpdate(
      id,
      { description, completed },
      { new: true, runValidators: true }
    );

    if (!updateTask) {
      return res.status(404).json({
        status: 'failed',
        message: 'Task not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        updateTask,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error,
    });
  }
});

module.exports = app;

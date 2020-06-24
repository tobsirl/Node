const express = require('express');
const userRouter = require('./routes/userRoutes');

const Task = require('./models/task');

const app = express();

app.use(express.json());

// Routes
app.use('/users/', userRouter);

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

app.delete('/tasks/:id', async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({
        status: 'failed',
        message: 'Task not found',
      });
    }
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
    });
  }
});

module.exports = app;

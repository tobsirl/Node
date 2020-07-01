const Task = require('../models/task');

exports.createTask = async (req, res) => {
  const newTask = new Task({
    ...req.body,
    owner: req.user._id,
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
};

exports.getTasks = async (req, res) => {
  try {
    // const tasks = await Task.find({ owner: req.user._id });
    await req.user.populate('tasks').execPopulate();

    res.status(200).json({
      status: 'success',
      data: {
        tasks: req.user.tasks,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

exports.getTask = async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send();
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
};

exports.updateTask = async (req, res) => {
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
    const updateTask = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!updateTask) {
      return res.status(404).json({
        status: 'failed',
        message: 'Task not found',
      });
    }

    updates.forEach((update) => (updateTask[update] = req.body[update]));
    updateTask.save();

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
};

exports.deleteTask = async (req, res) => {
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
};

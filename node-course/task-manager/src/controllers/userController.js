// Models
const User = require('../models/user');

exports.getUsers = async (req, res) => {
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
};

exports.getUser = async (req, res) => {
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
};

exports.createUser = async (req, res) => {
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
};

exports.updateUser = async (req, res) => {
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
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      return res.status(404).json({
        status: 'failed',
        message: 'User not found',
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

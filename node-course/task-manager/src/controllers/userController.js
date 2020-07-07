// Models
const User = require('../models/user');
const multer = require('multer');
const upload = multer({
  dest: 'avatar',
});

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
};

exports.logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
};

exports.getUsers = async (req, res) => {
  const user = req.user;

  try {
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
    const token = await newUser.generateAuthToken();
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
      token: token,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
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
    updates.forEach((update) => (req.user[update] = req.body[update]));

    req.user.save();

    res.status(200).json({
      status: 'success',
      data: {
        user: req.user,
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
    await req.user.remove();
    res.status(200).json({
      status: 'success',
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
    });
  }
};

exports.uploadAvatar = async ((req, res) => {
  res.send();
});

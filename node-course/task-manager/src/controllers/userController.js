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

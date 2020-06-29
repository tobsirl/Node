const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate' });
  }

  const bearerToken = req.headers.authorization;

  const token = bearerToken.split(' ')[1];

  console.log(token);

  next();
};

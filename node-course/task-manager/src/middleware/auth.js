const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    console.log(token);
    const decoded = jwt.verify(token, 'thecakeisalie');

    console.log(decoded);

    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

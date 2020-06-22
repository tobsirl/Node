const express = require('express');
const User = require('./models/user');

const app = express();

app.use(express.json());

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

module.exports = app;

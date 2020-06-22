const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  res.send(name, email, password);
});

module.exports = app;

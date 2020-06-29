const express = require('express');

// controllers
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disable');
//   } else {
//     next();
//   }
// });

app.use((req, res, next) => {
  const methods = ['GET', 'POST', 'PATCH', 'DELETE'];

  const isMatch = methods.every((method) => req.method === method);

  if (!isMatch) {
    res.status(503).send(`Server is under maintenace, please try again later`);
  } else {
    next();
  }
});

// Routes
app.use('/users/', userRouter);
app.use('/tasks/', taskRouter);

module.exports = app;

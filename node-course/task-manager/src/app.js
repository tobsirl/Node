const express = require('express');

// controllers
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

// Routes
app.use('/users/', userRouter);
app.use('/tasks/', taskRouter);

// const bcrypt = require('bcryptjs');

// const myFunction = async () => {
//   const password = 'JuAW2Zz3sfdvNPWc6Whm';

//   const hashed = await bcrypt.hash(password, 10);

//   console.log(`Password: ${password}`);
//   console.log(`Hashed: ${hashed}`);

//   const isMatch = await bcrypt.compare(password, hashed);

//   console.log(isMatch);
// };

// myFunction();

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   // create a token with id, secret and options
//   const token = jwt.sign({ _id: 'abc123' }, 'thecakeisalie', {
//     expiresIn: '7 days',
//   });

//   console.log(token);

//   // verify the token
//   const data = jwt.verify(token, 'thecakeisalie');

//   console.log(data);
// };

// myFunction();

module.exports = app;

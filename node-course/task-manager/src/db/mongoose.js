const mongoose = require('mongoose');
const validator = require('validator');

mongoose
  .connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to the database`))
  .catch((err) => console.log(err));

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error(`Age must be a positive number`);
    },
  },
});

const me = new User({ name: 'Mike', email: 'mike@' });

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log(error.message);
  });

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//   },
// });

// const task = new Task({ description: 'Task 1', completed: true });

// task
//   .save()
//   .then(() => console.log(task))
//   .catch((err) => {
//     console.log(err);
//   });

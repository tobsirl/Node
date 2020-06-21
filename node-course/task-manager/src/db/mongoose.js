const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to the database`))
  .catch((err) => console.log(err));

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });

// const me = new User({ name: 'Kennet', age: 23 });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const task = new Task({ description: 'Task 1', completed: true });

task
  .save()
  .then(() => console.log(task))
  .catch((err) => {
    console.log(err);
  });

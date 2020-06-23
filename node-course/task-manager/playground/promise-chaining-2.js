require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ef0c5ec5901030964a7b421')
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleletTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });

  return count;
};

deleletTaskAndCount('5eef1b1d92297c5c80eeccea', false)
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });

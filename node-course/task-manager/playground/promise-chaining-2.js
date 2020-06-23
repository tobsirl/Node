require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5ef0c5ec5901030964a7b421')
  .then(() => {
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

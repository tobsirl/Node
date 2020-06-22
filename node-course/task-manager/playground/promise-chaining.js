require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5ef0aa33ae0b7a317cd1c8ef', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

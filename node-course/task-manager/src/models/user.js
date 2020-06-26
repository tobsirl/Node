const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: [6, 'Password must be more than 6 charactors'],
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error(`Password cannot contain password`);
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

userSchema.statics.findByCredentials = async (email, password) => {
  // find the user
  const user = await User.findOne({ email });

  // if the user doesn't exist, throw an error
  if (!user) {
    throw new Error(`Unable to login`);
  }

  // use brypt compare to check the password
  const isMatch = await bcrypt.compare(password, user.password);

  // incorrect password, throw error
  if (!isMatch) {
    throw new Error(`Unable to login`);
  }

  return user;
};

// hash the plaintext password
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');
const validator = require('validator');

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

userSchema.pre('save', async function(next) {
  const user = this

  console.log(`Just before saving`)

  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;

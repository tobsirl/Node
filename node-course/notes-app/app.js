const validator = require('validator');

const { getNotes } = require('./notes');

const notes = getNotes();

const isEmail = validator.isEmail('paul@google.com');

console.log(notes);
console.log(isEmail);

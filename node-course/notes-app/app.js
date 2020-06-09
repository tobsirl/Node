const validator = require('validator');
const chalk = require('chalk');

const { getNotes } = require('./notes');

const notes = getNotes();

const isEmail = validator.isEmail('paul@google.com');

console.log(chalk.bgBlue(notes));
console.log(isEmail);
console.log(chalk.green('Success'));

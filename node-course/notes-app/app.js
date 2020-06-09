const validator = require('validator');
const chalk = require('chalk');
const yargv = require('yargs');

// Create the add command
yargv.command({
  command: 'add',
  describe: 'Adds a new note',
  handler: function () {
    console.log(`Adding a new note`);
  },
});

// Create the remove command
yargv.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log(`Remove a note`);
  },
});

// List the notes
yargv.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function () {
    console.log(`List all the notes`);
  },
});

// Read a note
yargv.command({
  command: 'read',
  describe: 'Read a specific note',
  handler: function () {
    console.log(`Read a specific note`);
  },
});

console.log(yargv.argv);

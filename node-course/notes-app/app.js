const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const { getNotes, addNote, removeNote } = require('./notes');

// Create the add command
yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

// Create the remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Remove a note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
});

// List the notes
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function () {
    console.log(`List all the notes`);
  },
});

// Read a note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log(`Read a note`);
  },
});

yargs.parse();

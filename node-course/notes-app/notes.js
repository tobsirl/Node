const fs = require('fs');
const chalk = require('chalk');

exports.getNotes = () => {
  return `Your notes...`;
};

exports.addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    const newNote = {
      title,
      body,
    };

    notes.push(newNote);
    saveNotes(notes);
    console.log(`New note added...`);
  } else {
    console.log(`Note title taken...`);
  }
};

exports.removeNote = (title) => {
  // load in the notes
  const notes = loadNotes();

  // remove the note
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    console.log(chalk.bgGreen(`Note removed!`));
    // save the results
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.bgRed(`Note not removed!`));
  }
};

exports.listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bgGreen.black(`Your Notes!`));
  return notes.map((note) =>
    console.log(chalk.bgGreen.black(`Title: ${note.title}`))
  );
};

exports.readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.bgGreen.black(`${note.title}`));
    console.log(`${note.body}`);
  } else {
    console.log(chalk.bgRed(`No note found!`));
  }
};

const saveNotes = (notes) => {
  const data = JSON.stringify(notes);

  fs.writeFileSync('notes.json', data);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

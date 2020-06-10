const fs = require('fs');

exports.getNotes = () => {
  return `Your notes...`;
};

exports.addNote = (title, body) => {
  const notes = loadNotes();

  const newNote = {
    title,
    body,
  };

  notes.push(newNote);

  saveNotes(notes);
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

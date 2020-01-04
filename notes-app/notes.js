const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return console.log("Your notes");
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.inverse.green("New note added"));
  } else {
    console.log(chalk.inverse.red("Note title already added"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.green("Removing note: ", title));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red("Note not found"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer);
  } catch (err) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.yellow("Your notes: "));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNotes();
  const readingNote = notes.find(note => note.title === title);
  if (readingNote) {
    console.log(chalk.inverse.blue(readingNote.title));
    console.log(readingNote.body);
  } else {
    console.log(chalk.inverse.red("Could not read note"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};

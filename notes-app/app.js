const fs = require("fs");
const notes = require("./notes");
// const chalk = require("chalk");
const yargs = require("yargs");

//Customize yargs version
yargs.version("1.1.0");

//add, remove, read, list notes
//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    // console.log("Title: " + argv.title + ": " + argv.body);
    notes.addNote(argv.title, argv.body);
  }
});

//Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing note");
  }
});

//List command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    console.log("List notes");
  }
});

//Read command
yargs.command({
  command: "read",
  describe: "Read notes",
  handler: () => {
    console.log("Read notes");
  }
});
// console.log(yargs.argv);
yargs.parse();

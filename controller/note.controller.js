let generator = require("../util/generator");
let model = require("../model/note.model");
let myStorage = require("../util/memory.storage");

exports.getAllNotes = (req, res) => {
  let values = myStorage.getValues(myStorage.store);
  res.status(200).send("get all notes values:" + values);
};

exports.saveNote = (req, res) => {
  let sequenceId = generator.generate();
  let title = req.body.title;
  let content = req.body.content;
  if (!title || !content) {
    res.status(500).send({ error: "title and content are required" });
  } else {
    let Note = model.Note;
    let noteObj = new Note(sequenceId, title, content, "admin", Date.now());
    myStorage.store.setItem(sequenceId, noteObj);
    res.status(200).send("note saved");
  }
};

exports.updateNote = (req, res) => {
  res.send("update note");
};

exports.deleteNote = (req, res) => {
  res.send("delete all notes");
};

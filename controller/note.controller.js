let generator = require("../util/generator");

exports.getAllNotes = (req, res) => {
  let new_id_1   = generator.generate();
  res.send("get all notes " + new_id_1);
};

exports.saveNote = (req, res) => {
  res.send("save note");
};

exports.updateNote = (req, res) => {
  res.send("update note");
};

exports.deleteNote = (req, res) => {
  res.send("delete all notes");
};

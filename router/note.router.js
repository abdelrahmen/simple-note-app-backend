const express = require("express");
const router = express.Router();

const noteController = require("../controller/note.controller");

// define the home page route
router.get("/notes", noteController.getAllNotes);
router.post("/notes/save", noteController.saveNote);
router.put("/notes/update", noteController.updateNote);
router.delete("/notes/delete", noteController.deleteNote);

module.exports = router;

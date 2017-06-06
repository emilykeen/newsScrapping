// Require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// Create the Note schema
var NoteSchema = new Schema({
	//title of note is a string
  title: {
    type: String
  },
  //body of note is a string
  body: {
    type: String
  }
});

var Note = mongoose.model("Note", NoteSchema);
// Export the Note model
module.exports = Note;
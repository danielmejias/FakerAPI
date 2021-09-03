const { ModalsPluginWeb } = require("@capacitor/core");
const notesCtrl = {};
const Note = require("../models/Note");

notesCtrl.getNote = async (req, res) => {
  console.log(req.params.id);
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json({ title: "Just One" });
};
notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find(); // {},{},{} ...
  res.json(notes);
};
notesCtrl.createNotes = async (req, res) => {
  const { carnet, nombre, calle, ciudad, estado, codigoPostal, contrasenia } =
    req.body;
  const newNote = new Note({
    carnet: carnet,
    nombre: nombre,
    calle: calle,
    ciudad: ciudad,
    estado: estado,
    codigoPostal: codigoPostal,
    contrasenia: contrasenia,
  });
  console.log(newNote);
  await newNote.save();
  res.json({ message: "Note Saved" });
};
notesCtrl.updateNotes = async (req, res) => {
  const { nombre, calle, ciudad, estado, codigoPostal, contrasenia } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    nombre: nombre,
    calle: calle,
    ciudad: ciudad,
    estado: estado,
    codigoPostal: codigoPostal,
    contrasenia: contrasenia,
  });
  res.json({ message: "Note Updated" });
};

notesCtrl.deleteNotes = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note  " + req.params.id + "  Deleted" });
};
module.exports = notesCtrl;

const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {  
    carnet: {
      type: Number,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },   
    calle: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },  
    codigoPostal: {
      type: String,
      required: true,
    },
    contrasenia: {
      type: String,
      required: true,
    },
  }
);
module.exports = model("Note", noteSchema);

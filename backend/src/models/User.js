const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {  
    carnet: {
      type: Number,
      required: true,
      unique: true,
    },
    primerNombre: {
      type: String,
      required: true,
    },   
    apellido: {
      type: String,
      required: true,
    },
    numeroTelefono: {
      type: Number,
      required: true,
    },  
    email: {
      type: String,
      required: true,
    },
    contrasenia: {
      type: String,
      required: true,
    },
  }
);
module.exports = model("User", userSchema);
